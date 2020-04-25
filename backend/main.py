from dotenv import load_dotenv
from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
from models import Challenge, Notification, User
import os
from pymongo import MongoClient
import random
from typing import Tuple

app = FastAPI()
load_dotenv()


def jsonify(func):
    """
    Creates a JSON response based on a status code and return data.
    :param func: the individual function
    :return: a wrapper that catches exceptions and gives a JSON response
    """
    def wrapper(*args, **kwargs):
        try:
            status_code, items = func(*args, **kwargs)
            return JSONResponse(status_code=status_code, content=items)
        except Exception as e:
            return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content=e)

    return wrapper


def _get_db():
    return MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}:'
                       f'{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')[os.getenv("MAIN_DB")]


@app.get("/challenges")
@jsonify
def get_challenges(user_id: int = None) -> Tuple[any, list]:
    """
    Lists all challenges.
    :param user_id: the id of the user
    :return: status code and response data
    """
    db = _get_db()
    all_challenges = list(db["challenges"].find())
    if not user_id:
        return status.HTTP_200_OK, all_challenges
    else:
        bookmarked_challenges = list(db["users"].find({"user_id": user_id})["bookmarks"])
        ordered_challenges = [x for x in all_challenges if x["owner_id" == user_id]] + [x for x in all_challenges if x[
            "challenge_id"] in bookmarked_challenges] + random.shuffle(
            [x for x in all_challenges if x["owner_id"] != user_id and x["challenge_id"] not in bookmarked_challenges])
        return status.HTTP_200_OK, ordered_challenges


@app.post("/challenges")
@jsonify
def create_challenge(challenge: Challenge) -> Tuple[any, list]:
    """
    Adds a new challenge.
    :param challenge: the challenge information
    :return: status code and response data
    """
    _get_db()["challenges"].insert_one(challenge)
    return status.HTTP_201_CREATED, []


@app.put("/challenges")
@jsonify
def adjust_challenge(challenge: Challenge) -> Tuple[any, list]:
    """
    Adjusts a challenge.
    :param challenge: the challenge information
    :return: status code and response data
    """
    _get_db()["challenges"].update_one({"challenge_id": challenge.challenge_id}, {"$set": challenge})
    return status.HTTP_204_NO_CONTENT, []


@app.get("/challenges/{challenge_id}")
@jsonify
def get_individual_challenge(challenge_id: int) -> Tuple[any, list]:
    """
    Lists the information for a specific challenge.
    :param challenge_id: the id of the challenge
    :return: status code and response data
    """
    challenge = _get_db()["challenges"].find_one({"challenge_id": challenge_id})
    return status.HTTP_200_OK, [challenge]


@app.get("/users")
@jsonify
def get_users() -> Tuple[any, list]:
    """
    Lists all users.
    :return: status code and response data
    """
    users = list(_get_db()["users"].find())
    return status.HTTP_200_OK, users


@app.post("/users")
@jsonify
def create_user(user: User) -> Tuple[any, list]:
    """
    Adds a new user.
    :param user: the update information
    :return: status code and response data
    """
    _get_db()["users"].insert_one(user)
    return status.HTTP_201_CREATED, []


@app.put("/users")
@jsonify
def adjust_user(user: User) -> Tuple[any, list]:
    """
    Lists all information belonging to one user.
    :param user: the update information
    :return: status code and response data
    """
    _get_db()["users"].update_one({"user_id": user.user_id}, {"$set": user})
    return status.HTTP_204_NO_CONTENT, []


@app.get("/users/{user_id}")
@jsonify
def get_individual_user(user_id: int) -> Tuple[any, list]:
    """
    Lists all information belonging to one user.
    :param user_id: the id of the user
    :return: status code and response data
    """
    user = _get_db()["users"].find_one({"user_id": user_id})
    return status.HTTP_200_OK, [user]


@app.get("/notifications")
@jsonify
def get_user_notificatiions(user_id: int = None) -> Tuple[any, list]:
    """
    Lists all notifications for a certain user
    :param user_id: the id of the user
    :return: status code and response data
    """
    notifications = list(_get_db()["notifications"].find({"user_id": user_id}))
    return status.HTTP_200_OK, notifications


@app.post("/notifications")
@jsonify
def create_notification(notification: Notification) -> Tuple[any, list]:
    _get_db()["notifications"].insert_one(notification)
    return status.HTTP_201_CREATED, []
