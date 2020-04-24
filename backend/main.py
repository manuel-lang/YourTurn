from fastapi import FastAPI
from typing import Tuple
from backend.models import Challenge, User

app = FastAPI()


@app.get("/challenges")
def get_challenges(user_id: int) -> Tuple[dict, int]:
    """
    Lists all challenges.
    :param user_id: the id of the user
    :return: response data and status code
    """
    return {}, 200


@app.post("/challenges")
def create_challenge(challenge: Challenge) -> Tuple[dict, int]:
    """
    Add a new challenge.
    :param challenge: the challenge information
    :return: response data and status code
    """
    return {}, 200


@app.get("/challenges/{challenge_id}")
def get_individual_challenge(challenge_id: int, user_id: int) -> Tuple[dict, int]:
    """
    Lists the information for a specific challenge.
    :param challenge_id: the id of the challenge
    :param user_id: the id of the user
    :return: response data and status code
    """
    return {}, 200


@app.put("/challenges/")
def adjust_challenge(challenge: Challenge) -> Tuple[dict, int]:
    """
    Adjusts a challenge.
    :param challenge: the challenge information
    :return: response data and status code
    """
    return {}, 200


@app.get("/users")
def get_users() -> Tuple[dict, int]:
    """
    Lists all users.
    :return: response data and status code
    """
    return {}, 200


@app.post("/users")
def create_user(user: User) -> Tuple[dict, int]:
    """
    Adds a new user.
    :param user: the update information
    :return: response data and status code
    """
    return {}, 200


@app.get("/users/{user_id}")
def get_individual_user(user_id: int) -> Tuple[dict, int]:
    """
    Lists all information belonging to one user.
    :param user_id: the id of the user
    :return: response data and status code
    """
    return {}, 200


@app.put("/users/{user_id}")
def adjust_user(user: User) -> Tuple[dict, int]:
    """
    Lists all information belonging to one user.
    :param user: the update information
    :return: response data and status code
    """
    return {}, 200
