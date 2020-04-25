from pydantic import BaseModel
from datetime import datetime


class Challenge(BaseModel):
    name: str
    owner: dict
    challenge_id: int = None
    description: str = ""
    private: bool = False
    participants: list = []
    tags: list = []
    likes: list = []
    costs: int = 0
    completed_users: list = []
    deadline: datetime = datetime.now()
    proof: str = ""
    picture_id: int = 0
    bet: str = ""
    voting: bool = False

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
    notification_id: int = None
    user_id: int
    new: bool = True

    def to_dict(self):
        return self.__dict__
