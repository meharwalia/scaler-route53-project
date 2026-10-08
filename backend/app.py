from contextlib import asynccontextmanager
from fastapi import FastAPI
from db import create_db_and_tables
from routes import users, hosted_zones


@asynccontextmanager
async def lifespan(app:FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)


app.include_router(users.router)
app.include_router(hosted_zones.router)

