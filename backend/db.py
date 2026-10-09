from sqlmodel import Session, SQLModel, create_engine, select
from models.user import User
from models.hosted_zone import HostedZone
import bcrypt
import os
import uuid

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread" : False}
engine = create_engine(sqlite_url, connect_args=connect_args)



def get_session():
    with Session(engine) as session:
        yield session


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    create_mock_data()
    

MOCK_ACCOUNTS = [
    {"account": 12345, "username": "johndoe", "domain": "johndoe.com", "ip": "192.0.2.10"},
    {"account": 56789, "username": "janedoe", "domain": "janedoe.com", "ip": "192.0.2.09"},
]


def create_mock_data():
    with Session(engine) as session:
        if session.exec(select(User).where(User.username == MOCK_ACCOUNTS[0]["username"])).first():
            return

        for mock in MOCK_ACCOUNTS:
            user = User(
                username=mock["username"],
                password=bcrypt.hashpw(b"password", bcrypt.gensalt()).decode(),
                account=mock["account"],
            )
            session.add(user)
            session.flush()

            zone = HostedZone(
                id=uuid.uuid4(),
                domain_name=mock["domain"],
                description=f"Public zone for {mock['domain']}",
                account=mock["account"],
                created_by=user.id,
                updated_by=user.id,
            )
            session.add(zone)
            session.flush()

        session.commit()
