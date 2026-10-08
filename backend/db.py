from typing import Annotated
from fastapi import Depends
from sqlmodel import Session, SQLModel, create_engine, select
from models.user import User

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread" : False}
engine = create_engine(sqlite_url, connect_args=connect_args)



def get_session():
    with Session(engine) as session:
        yield session


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    create_dummy_user()


def create_dummy_user():
    user = User(username="johndoe", password="password", account=1)
    with Session(engine) as session:
        if session.exec(select(User).where(User.username == "johndoe")).first():
            return
        session.add(user)
        session.commit()
        session.refresh(user)
