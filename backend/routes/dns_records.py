from fastapi import APIRouter, Depends, HTTPException, Query, Request
from sqlmodel import select, update, Session, delete
from typing import Annotated
from db import get_session
from models.dns_record import DNSRecord, RecordType, RoutingPolicy
from models.hosted_zone import HostedZone, utc_now
from middleware.auth import attach_user
from middleware.zone_access import can_access_zone
import re
import uuid


SessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(
    prefix="/api/v1/hostedzones/{zone_id}/dnsrecords",
    dependencies=[Depends(attach_user), Depends(can_access_zone)]
)

MAX_TTL = 2147483647

LABEL = r"(?!-)[A-Za-z0-9_-]{1,63}(?<!-)"
DOMAIN_NAME_RE = re.compile(rf"^(\*\.)?({LABEL}\.)*{LABEL}\.?$")

SEARCHABLE_FIELDS = {
    "record_name": DNSRecord.record_name,
    "record_type": DNSRecord.record_type,
    "routing_policy": DNSRecord.routing_policy,
}


def is_enum_value(enum_class, value) -> bool:
    try:
        enum_class(value)
    except ValueError:
        return False
    return True


def validate_dns_record(record: DNSRecord, zone: HostedZone) -> None:
    record.record_name = record.record_name.strip().lower()

    errors = []

    zone_domain = zone.domain_name.strip().lower().rstrip(".")
    record_domain = record.record_name.rstrip(".")

    if record_domain != zone_domain and not record_domain.endswith("." + zone_domain):
        errors.append(f"record_name must be {zone_domain} or a subdomain of it")

    if not is_enum_value(RecordType, record.record_type):
        errors.append("record_type must be one of " + ", ".join(t.value for t in RecordType))

    if not is_enum_value(RoutingPolicy, record.routing_policy):
        errors.append("routing_policy must be one of " + ", ".join(p.value for p in RoutingPolicy))

    if not 0 <= record.ttl <= MAX_TTL:
        errors.append(f"ttl must be between 0 and {MAX_TTL}")

    if errors:
        raise HTTPException(status_code=400, detail=errors)


@router.get("/")
def get_dns_records(
    zone_id: uuid.UUID,
    session: SessionDep,
    search: str | None = None,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[DNSRecord]:
    statement = select(DNSRecord).where(DNSRecord.zone_id == zone_id)

    if search:
        key, sep, value = search.partition(":")
        if not sep or key not in SEARCHABLE_FIELDS:
            raise HTTPException(status_code=400, detail="search must be key:value with key in " + ", ".join(SEARCHABLE_FIELDS))
        statement = statement.where(SEARCHABLE_FIELDS[key] == value)

    return session.exec(statement.offset(offset).limit(limit)).all()


@router.get("/{id}")
def get_dns_record(zone_id: uuid.UUID, id: int, session: SessionDep) -> DNSRecord:
    dns_record = session.exec(
        select(DNSRecord).where(DNSRecord.id == id)
    ).first()
    if dns_record is None:
        raise HTTPException(status_code=404, detail="DNS record not found")
    return dns_record


@router.post("/")
def create_dns_record(zone_id: uuid.UUID, dns_record: DNSRecord, request: Request, session: SessionDep) -> DNSRecord:
    user_id = request.state.user_id

    validate_dns_record(dns_record, request.state.zone)

    now = utc_now()
    dns_record.id = None
    dns_record.zone_id = zone_id
    dns_record.created_at = now
    dns_record.created_by = user_id
    dns_record.updated_at = now
    dns_record.updated_by = user_id

    session.add(dns_record)
    session.commit()
    session.refresh(dns_record)
    return dns_record


@router.put("/{id}")
def update_dns_record(zone_id: uuid.UUID, id: int, dns_record: DNSRecord, request: Request, session: SessionDep) -> DNSRecord:
    user_id = request.state.user_id

    validate_dns_record(dns_record, request.state.zone)

    statement = (
        update(DNSRecord)
        .where(DNSRecord.id == id, DNSRecord.zone_id == zone_id)
        .values(
            record_name=dns_record.record_name,
            record_type=dns_record.record_type,
            value=dns_record.value,
            ttl=dns_record.ttl,
            routing_policy=dns_record.routing_policy,
            updated_at=utc_now(),
            updated_by=user_id,
        )
        .returning(DNSRecord)
    )
    db_dns_record = session.exec(statement).scalar_one_or_none()
    if db_dns_record is None:
        raise HTTPException(status_code=404, detail="DNS record not found")

    session.expunge(db_dns_record)
    session.commit()
    return db_dns_record


@router.delete("/{id}")
def delete_dns_record(zone_id: uuid.UUID, id: int, session: SessionDep):
    statement = delete(DNSRecord).where(DNSRecord.id == id)
    result = session.exec(statement)
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="DNS record not found")

    session.commit()

    return {"success": True}
