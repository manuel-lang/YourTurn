from pydantic import BaseModel


class Challenge(BaseModel):
    name: str
    owner_id: int
    challenge_id: int = None
    description: str = None
    private: bool = False


class User(BaseModel):
    name: str
    user_id: int = None
    friends_ids: list = None
    bookmarks: list = None
