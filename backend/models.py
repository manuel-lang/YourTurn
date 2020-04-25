from pydantic import BaseModel
import json


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

    def to_dict(self):
        return self.__dict__


class User(BaseModel):
    name: str
    user_id: int = None
    friends_ids: list = []
    bookmarks: list = []
    challenges: list = []
    completed_challenges: list = []

    def to_dict(self):
        return self.__dict__


class Notification(BaseModel):
    content: str
    user_id: int
    new: bool = True

    def to_dict(self):
        return self.__dict__
