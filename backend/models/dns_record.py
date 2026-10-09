import uuid
from datetime import datetime
from enum import Enum
from sqlmodel import Field, SQLModel
from models.hosted_zone import utc_now


class RecordType(str, Enum):
    A = "A"
    AAAA = "AAAA"
    CAA = "CAA"
    CNAME = "CNAME"
    MX = "MX"
    NS = "NS"
    PTR = "PTR"
    SOA = "SOA"
    SRV = "SRV"
    TXT = "TXT"


class RoutingPolicy(str, Enum):
    simple = "simple"
    weighted = "weighted"
    latency = "latency"
    failover = "failover"
    geolocation = "geolocation"
    multivalue = "multivalue"


class DNSRecord(SQLModel, table=True):
    id : int | None = Field(default=None, primary_key=True)
    record_name : str = Field(index=True)
    record_type : RecordType
    value : str
    ttl : int = Field(default=300)
    routing_policy : RoutingPolicy = Field(default=RoutingPolicy.simple)
    zone_id : uuid.UUID | None = Field(default=None, foreign_key="hostedzone.id", index=True, nullable=False)
    created_at : datetime = Field(default_factory=utc_now)
    created_by : int | None = Field(default=None, foreign_key="user.id", nullable=False)
    updated_at : datetime = Field(default_factory=utc_now)
    updated_by : int | None = Field(default=None, foreign_key="user.id", nullable=False)
