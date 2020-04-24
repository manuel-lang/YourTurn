from pydantic import BaseModel


class Challenge(BaseModel):
    name: str
    owner_id: int
    description: str = None


class User(BaseModel):
    name: str
    user_id: int = None
    friends_ids: list = None