from fastapi import HTTPException, Request
from sqlmodel import Session, select
from db import engine
from models.user import User

# TODO: replace with the username from the JWT once auth is in place
DUMMY_USERNAME = "johndoe"


def attach_user(request: Request):
    with Session(engine) as session:
        user = session.exec(select(User).where(User.username == DUMMY_USERNAME)).first()

    if user is None:
        raise HTTPException(status_code=401, detail="User not found")

    request.state.user_id = user.id
    request.state.user_name = user.username
    request.state.account_id = user.account
