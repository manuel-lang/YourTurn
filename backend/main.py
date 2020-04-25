from dotenv import load_dotenv
from fastapi import FastAPI, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import Challenge, Notification, User
import os
from pymongo import MongoClient
import random

app = FastAPI()
load_dotenv()


def _get_db():
    return MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}:'
                       f'{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')[os.getenv("MAIN_DB")]


@app.get("/challenges")
def get_challenges(user_id: int) -> JSONResponse:
    """
    Lists all challenges.
    :param user_id: the id of the user
    :return: status code and response data
    """
    db = _get_db()
    all_challenges = list(db["challenges"].find())
    if not user_id:
        return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder(all_challenges))
    else:
        bookmarked_challenges = [x["bookmarks"] for x in list(db["users"].find({"user_id": user_id}))]
        other_challenges = [x for x in all_challenges if
                            x["owner_id"] != user_id and x["challenge_id"] not in bookmarked_challenges]
        random.shuffle(other_challenges)
        ordered_challenges = [x for x in all_challenges if x["owner_id" == user_id]] + [x for x in all_challenges if x[
            "challenge_id"] in bookmarked_challenges] + other_challenges
        return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder(ordered_challenges))


@app.post("/challenges")
def create_challenge(challenge: Challenge) -> JSONResponse:
    """
    Adds a new challenge.
    :param challenge: the challenge information
    :return: status code and response data
    """
    db = _get_db()
    challenge.challenge_id = db["challenges"].find().count() + 1
    db["challenges"].insert_one(challenge.to_dict())
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=jsonable_encoder([]))


@app.put("/challenges")
def update_challenge(challenge: Challenge) -> JSONResponse:
    """
    Updates a challenge.
    :param challenge: the challenge information
    :return: status code and response data
    """
    _get_db()["challenges"].update_one({"challenge_id": challenge.challenge_id}, {"$set": challenge.to_dict()})
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=jsonable_encoder([]))


@app.get("/challenges/{challenge_id}")
def get_individual_challenge(challenge_id: int) -> JSONResponse:
    """
    Lists the information for a specific challenge.
    :param challenge_id: the id of the challenge
    :return: status code and response data
    """
    challenge = _get_db()["challenges"].find_one({"challenge_id": challenge_id})
    return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder([challenge]))


@app.get("/users")
def get_users() -> JSONResponse:
    """
    Lists all users.
    :return: status code and response data
    """
    users = list(_get_db()["users"].find())
    return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder(users))


@app.post("/users")
def create_user(user: User) -> JSONResponse:
    """
    Adds a new user.
    :param user: the update information
    :return: status code and response data
    """
    db = _get_db()
    user.user_id = db["users"].find().count() + 1
    db["users"].insert_one(user.to_dict())
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=jsonable_encoder([]))


@app.put("/users")
def update_user(user: User) -> JSONResponse:
    """
    Updates the information belong to a given user.
    :param user: the update information
    :return: status code and response data
    """
    print(user.to_dict())
    _get_db()["users"].update_one({"user_id": user.user_id}, {"$set": user.to_dict()})
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=jsonable_encoder([]))


@app.get("/users/{user_id}")
def get_individual_user(user_id: int) -> JSONResponse:
    """
    Lists all information belonging to one user.
    :param user_id: the id of the user
    :return: status code and response data
    """
    user = _get_db()["users"].find_one({"user_id": user_id})
    return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder([user]))


@app.get("/notifications")
def get_user_notifications(user_id: int = None) -> JSONResponse:
    """
    Lists all notifications for a certain user.
    :param user_id: the id of the user
    :return: status code and response data
    """
    notifications = list(_get_db()["notifications"].find({"user_id": user_id}))
    return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder(notifications))


@app.post("/notifications")
def create_notification(notification: Notification) -> JSONResponse:
    """
    Adds a new notification.
    :param notification: the notification to add
    :return: status code and response data
    """
    db = _get_db()
    notification.notification_id = db["notifications"].find().count() + 1
    _get_db()["notifications"].insert_one(notification.to_dict())
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=jsonable_encoder([]))


@app.put("/notifications")
def update_notification(notification: Notification) -> JSONResponse:
    """
    Updates a notification.
    :param notification: the update information
    :return: status code and response data
    """
    _get_db()["notifications"].update_one({"notification_id": notification.notification_id},
                                          {"$set": notification.to_dict()})
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=jsonable_encoder([]))
