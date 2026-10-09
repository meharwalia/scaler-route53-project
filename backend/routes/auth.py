from fastapi import APIRouter, Body, Depends, HTTPException, Response
from sqlmodel import select, Session
from typing import Annotated
from datetime import datetime, timedelta, timezone
from db import get_session
from models.user import User
import bcrypt
import jwt
import os

JWT_SECRET = os.getenv("JWT_SECRET")
if not JWT_SECRET:
    raise RuntimeError("JWT_SECRET environment variable must be set")

JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
JWT_EXPIRE_MINUTES = int(os.getenv("JWT_EXPIRE_MINUTES", "60"))

COOKIE_NAME = "session"
COOKIE_SECURE = os.getenv("COOKIE_SECURE", "false").lower() == "true"

SessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(
    prefix="/api/v1/auth"
)


def verify_password(password: str, password_hash: str) -> bool:
    try:
        return bcrypt.checkpw(password.encode(), password_hash.encode())
    except ValueError:
        return False


def create_jwt(user_id: int) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "sub": str(user_id),
        "iat": now,
        "exp": now + timedelta(minutes=JWT_EXPIRE_MINUTES),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


@router.post("/login")
def login(account_id: Annotated[int, Body()], username: Annotated[str, Body()], password: Annotated[str, Body()], response: Response, session: SessionDep):
    user = session.exec(select(User).where(User.account == account_id, User.username == username)).first()
    if user is None or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    response.set_cookie(
        key=COOKIE_NAME,
        value=create_jwt(user.id),
        max_age=JWT_EXPIRE_MINUTES * 60,
        httponly=True,
        secure=COOKIE_SECURE,
        samesite="lax",
    )
    return {"success": True}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie(key=COOKIE_NAME, httponly=True, secure=COOKIE_SECURE, samesite="lax")
    return {"success": True}
