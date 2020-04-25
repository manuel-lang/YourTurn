from pydantic import BaseModel
import json


class Challenge(BaseModel):
    name: str
    owner_id: int
    challenge_id: int = None
    description: str = ""
    private: bool = False
    participants: list = []
    tags: list = []
    likes: list = []
    costs: int = 0
    completed_users: list = []

    def to_dict(self):
        return self.__dict__


class User(BaseModel):
    name: str
    user_id: int = None
    friends_ids: list = []
    bookmarks: list = []
    challenges: list = []
    completed_challenges: list = []
    notifications = []

    def to_dict(self):
        return self.__dict__


class Notification(BaseModel):
    content: str
    notification_id: int
    user_id: int
    new: bool = True

    def to_dict(self):
        return self.__dict__
