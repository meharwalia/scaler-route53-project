import uuid
from datetime import datetime, timezone
from enum import Enum
from sqlmodel import Field, SQLModel, Column, JSON


class ZoneType(str, Enum):
    public = "public"
    private = "private"


def utc_now():
    return datetime.now(timezone.utc)


class HostedZone(SQLModel, table=True):
    id : uuid.UUID = Field(primary_key=True)
    domain_name : str = Field(index=True)
    description : str | None = Field(default=None)
    type : ZoneType = Field(default=ZoneType.public)
    account : int = Field(index=True)  # TODO: foreign_key="account.id" once accounts table exists
    created_at : datetime = Field(default_factory=utc_now)
    created_by : int = Field(foreign_key="user.id")
    updated_at : datetime = Field(default_factory=utc_now)
    updated_by : int = Field(foreign_key="user.id")
    tags : str | None = Field(default=None)

class HostedZoneCreate(SQLModel):
    domain_name: str
    description: str | None = None
    type: ZoneType = ZoneType.public
    tags: str | None = None
