from fastapi import FastAPI
from typing import Tuple

app = FastAPI()


@app.get("/challenges")
def get_challenges() -> Tuple[dict, int]:
    """
    Lists all challenges.
    :return: response data and status code
    """
    return {}, 200


@app.post("/challenges")
def add_challenge() -> Tuple[dict, int]:
    """
    Add a new challenge.
    :return: response data and status code
    """
    return {}, 200


@app.get("/challenges/{challenge_id}")
def get_individual_challenge(challenge_id: int) -> Tuple[dict, int]:
    """
    Lists the information for a specific challenge.
    :return: response data and status code
    """
    return {}, 200


@app.put("/challenges/{challenge_id")
def adjust_challenge() -> Tuple[dict, int]:
    """
    Adjusts a challenge.
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
def add_user() -> Tuple[dict, int]:
    """
    Adds a new user.
    :return: response data and status code
    """
    return {}, 200


@app.get("/users/{user_id}")
def get_individual_user(user_id: int) -> Tuple[dict, int]:
    """
    Lists all information belonging to one user.
    :param user_id:
    :return: response data and status code
    """
    return {}, 200
