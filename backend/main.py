from dotenv import load_dotenv
from fastapi import FastAPI
from models import Challenge, User
import os
from pymongo import MongoClient
import random
from typing import Tuple, List

app = FastAPI()


@app.get("/challenges")
def get_challenges(user_id: int) -> List:
    """
    Lists all challenges.
    :param user_id: the id of the user
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
    :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    all_challenges = list(client["challenges"].find())
    bookmarked_challenges = list(client["users"].find({"user_id": user_id})["bookmarks"])
    ordered_challenges = [x for x in all_challenges if x["owner_id" == user_id]] + [x for x in all_challenges if x[
        "challenge_id"] in bookmarked_challenges] + random.shuffle(
        [x for x in all_challenges if x["owner_id"] != user_id and x["challenge_id"] not in bookmarked_challenges])
    return ordered_challenges


@app.post("/challenges")
def create_challenge(challenge: Challenge) -> Tuple[dict, int]:
    """
    Add a new challenge.
    :param challenge: the challenge information
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    client["challenges"].insert_one(challenge)
    return {}, 200


@app.get("/challenges/{challenge_id}")
def get_individual_challenge(challenge_id: int) -> Tuple[dict, int]:
    """
    Lists the information for a specific challenge.
    :param challenge_id: the id of the challenge
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    challenge = client["challenges"].find_one({"challenge_id": challenge_id})
    return challenge, 200


@app.put("/challenges/")
def adjust_challenge(challenge: Challenge) -> Tuple[dict, int]:
    """
    Adjusts a challenge.
    :param challenge: the challenge information
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    client["challenges"].update_one({"challenge_id": challenge.challenge_id}, {"$set": challenge})
    return {}, 200


@app.get("/users")
def get_users() -> Tuple[List, int]:
    """
    Lists all users.
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    users = list(client["users"].find())
    return users, 200


@app.post("/users")
def create_user(user: User) -> Tuple[dict, int]:
    """
    Adds a new user.
    :param user: the update information
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    client["users"].insert_one(user)
    return {}, 200


@app.get("/users/{user_id}")
def get_individual_user(user_id: int) -> Tuple[dict, int]:
    """
    Lists all information belonging to one user.
    :param user_id: the id of the user
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    client["users"].find({"user_id": user_id})
    return {}, 200


@app.put("/users/{user_id}")
def adjust_user(user: User) -> Tuple[dict, int]:
    """
    Lists all information belonging to one user.
    :param user: the update information
    :return: response data and status code
    """
    client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}\
        :{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')
    client["users"].update_one({"user_id": user.user_id}, {"$set": user})
    return {}, 200
