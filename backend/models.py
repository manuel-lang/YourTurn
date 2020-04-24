from pydantic import BaseModel


class Challenge(BaseModel):
    name: str
    owner_id: int
    challenge_id: int = None
    description: str = None
    private: bool = False
    participants: list = None
    tags: list = None
    likes: list = None
    costs: int = None
    completed_users: list = None


class User(BaseModel):
    name: str
    user_id: int = None
    friends_ids: list = None
    bookmarks: list = None
    challenges: list = None
    completed_challenges: list = None
