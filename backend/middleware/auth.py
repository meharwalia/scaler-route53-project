from fastapi import HTTPException, Request
from sqlmodel import Session
from db import engine
from models.user import User
import jwt
import os

JWT_SECRET = os.getenv("JWT_SECRET")
if not JWT_SECRET:
    raise RuntimeError("JWT_SECRET environment variable must be set")

JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")

COOKIE_NAME = "session"


def attach_user(request: Request):
    jwt_token = request.cookies.get(COOKIE_NAME)
    if not jwt_token:
        raise HTTPException(status_code=401, detail="Not authenticated")

    try:
        payload = jwt.decode(jwt_token, JWT_SECRET, algorithms=[JWT_ALGORITHM], options={"require": ["exp", "sub"]})
        user_id = int(payload["sub"])
    except (jwt.PyJWTError, ValueError):
        raise HTTPException(status_code=401, detail="Invalid or expired JWT")

    with Session(engine) as session:
        user = session.get(User, user_id)

    if user is None:
        raise HTTPException(status_code=401, detail="User not found")

    request.state.user_id = user.id
    request.state.user_name = user.username
    request.state.account_id = user.account