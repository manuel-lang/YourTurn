from typing import List

from bson.json_util import dumps
from dotenv import load_dotenv
from fastapi import FastAPI, status, Query
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from models import Challenge, Notification, User
import os
from pymongo import MongoClient, ASCENDING
import random

app = FastAPI()
app.mount("/static", StaticFiles(directory="../static"), name="static")
load_dotenv()


def _get_db():
    return MongoClient(f'mongodb://{os.getenv("REMOTE_HOST")}:{os.getenv("REMOTE_PORT")}')[os.getenv("MAIN_DB")]
    #return MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}:'
    #                   f'{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')[os.getenv("MAIN_DB")]


@app.get("/challenges")
def get_challenges(user_id: int, tag: list = Query(None)) -> JSONResponse:
    """
    Lists all challenges.
    :param user_id: the id of the user
    :param tag: the given tags
    :return: status code and response data
    """
    db = _get_db()
    all_challenges = list(db["challenges"].find().sort("challenge_id", ASCENDING))
    if not user_id:
        challenges = all_challenges
    elif not tag:
        bookmarked_challenges = [x["bookmarks"] for x in list(db["users"].find({"user_id": user_id}))][0]
        print(bookmarked_challenges)
        other_challenges = [x for x in all_challenges if
                            x["owner"]["id"] != user_id and x["challenge_id"] not in bookmarked_challenges]
        random.shuffle(other_challenges)
        challenges = [x for x in all_challenges if x["owner"]["id"] == user_id] + [x for x in all_challenges if x[
            "challenge_id"] in bookmarked_challenges] + other_challenges
    else:
        challenges = []
        for c in all_challenges:
            contains_tags = True
            for t in tag:
                if t not in c["tags"]:
                    contains_tags = False
                    break
            if contains_tags:
                challenges.append(c)

    user_bookmarks = list(db["users"].find({"user_id": user_id}))[0]["bookmarks"]
    for i in range(len(challenges)):
        challenges[i]["coopetition"] = random.choice([True, False])
        challenges[i]["bookmarked"] = challenges[i]["challenge_id"] in user_bookmarks
        challenges[i]["comments"] = random.randint(0, 9)

    return JSONResponse(status_code=status.HTTP_200_OK, content=dumps(challenges))


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
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=dumps([]))


@app.put("/challenges")
def update_challenge(challenge: Challenge) -> JSONResponse:
    """
    Updates a challenge.
    :param challenge: the challenge information
    :return: status code and response data
    """
    _get_db()["challenges"].update_one({"challenge_id": challenge.challenge_id}, {"$set": challenge.to_dict()})
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=dumps([]))


@app.get("/challenges/{challenge_id}")
def get_individual_challenge(challenge_id: int) -> JSONResponse:
    """
    Lists the information for a specific challenge.
    :param challenge_id: the id of the challenge
    :return: status code and response data
    """
    challenge = _get_db()["challenges"].find_one({"challenge_id": challenge_id})
    return JSONResponse(status_code=status.HTTP_200_OK, content=dumps(challenge))


@app.get("/users")
def get_users() -> JSONResponse:
    """
    Lists all users.
    :return: status code and response data
    """
    users = list(_get_db()["users"].find())
    return JSONResponse(status_code=status.HTTP_200_OK, content=dumps(users))


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
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=dumps([]))


@app.put("/users")
def update_user(user: User) -> JSONResponse:
    """
    Updates the information belong to a given user.
    :param user: the update information
    :return: status code and response data
    """
    print(user.to_dict())
    _get_db()["users"].update_one({"user_id": user.user_id}, {"$set": user.to_dict()})
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=dumps([]))


@app.get("/users/{user_id}")
def get_individual_user(user_id: int) -> JSONResponse:
    """
    Lists all information belonging to one user.
    :param user_id: the id of the user
    :return: status code and response data
    """
    user = _get_db()["users"].find_one({"user_id": user_id})
    return JSONResponse(status_code=status.HTTP_200_OK, content=dumps(user))


@app.get("/notifications")
def get_user_notifications(user_id: int = None) -> JSONResponse:
    """
    Lists all notifications for a certain user.
    :param user_id: the id of the user
    :return: status code and response data
    """
    notifications = list(_get_db()["notifications"].find({"user_id": user_id}))
    return JSONResponse(status_code=status.HTTP_200_OK, content=dumps(notifications))


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
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=dumps([]))


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
