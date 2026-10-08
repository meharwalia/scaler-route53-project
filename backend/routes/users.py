from fastapi import APIRouter, Depends, Query
from sqlmodel import select, Session
from typing import Annotated
from db import get_session
from models.user import User

SessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(
    prefix="/api/v1/users"
)

@router.get("/")
def get_all_users(session : SessionDep, offset:int = 0, limit : Annotated[int, Query(le=100)] = 100) -> list[User]:
    user = session.exec(select(User).offset(offset).limit(limit)).all()
    return user

@router.post("/")
def create_user(user: User, session : SessionDep) -> User:
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

