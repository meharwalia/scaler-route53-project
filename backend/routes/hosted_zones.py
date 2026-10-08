from fastapi import APIRouter, Depends, HTTPException, Query, Request
from sqlmodel import select, update, Session, delete
from typing import Annotated
from db import get_session
from models.hosted_zone import HostedZone, utc_now
from middleware.auth import attach_user
import uuid


SessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(
    prefix="/api/v1/hostedzones",
    dependencies=[Depends(attach_user)]
)

@router.get("/")
def get_hosted_zones(request : Request, session : SessionDep, offset:int = 0, limit : Annotated[int, Query(le=100)] = 100) -> list[HostedZone]:
    account_id = request.state.account_id
    hosted_zones = session.exec(select(HostedZone).where(HostedZone.account == account_id).offset(offset).limit(limit)).all()
    return hosted_zones

@router.post("/")
def create_hosted_zone(hosted_zone: HostedZone, request : Request, session : SessionDep) -> HostedZone:
    id = uuid.uuid4()
    account_id = request.state.account_id
    user_id = request.state.user_id

    hosted_zone.id = id
    hosted_zone.account = account_id
    hosted_zone.created_by = user_id
    hosted_zone.updated_by = user_id

    session.add(hosted_zone)
    session.commit()
    session.refresh(hosted_zone)
    return hosted_zone

@router.put("/{id}")
def update_hosted_zone(id : uuid.UUID, hosted_zone : HostedZone, request : Request, session : SessionDep) -> HostedZone:
    account_id = request.state.account_id
    user_id = request.state.user_id

    statement = (
        update(HostedZone)
        .where(HostedZone.id == id, HostedZone.account == account_id)
        .values(
            domain_name=hosted_zone.domain_name,
            description=hosted_zone.description,
            type=hosted_zone.type,
            tags=hosted_zone.tags,
            updated_at=utc_now(),
            updated_by=user_id,
        )
        .returning(HostedZone)
    )
    db_hosted_zone = session.exec(statement).scalar_one_or_none()
    if db_hosted_zone is None:
        raise HTTPException(status_code=404, detail="Hosted zone not found")

    session.expunge(db_hosted_zone)
    session.commit()
    return db_hosted_zone


@router.delete("/{id}")
def delete_hosted_zone(id : uuid.UUID, request : Request, session : SessionDep):
    account_id = request.state.account_id

    statement = delete(HostedZone).where(HostedZone.id == id, HostedZone.account == account_id)
    result = session.exec(statement)
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="Hosted zone not found")

    session.commit()

    return {"sucess" : True}



