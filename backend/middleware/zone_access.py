import uuid
from fastapi import HTTPException, Request
from sqlmodel import Session, select
from db import engine
from models.hosted_zone import HostedZone


def can_access_zone(zone_id: uuid.UUID, request: Request):
    with Session(engine) as session:
        zone = session.exec(
            select(HostedZone).where(HostedZone.id == zone_id, HostedZone.account == request.state.account_id)
        ).first()

    if zone is None:
        raise HTTPException(status_code=404, detail="Hosted zone not found")

    request.state.zone = zone
