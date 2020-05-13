from pymongo import MongoClient
import os
import initial_data
from dotenv import load_dotenv
load_dotenv()

users = initial_data.users
challenges = initial_data.challenges
notifications = initial_data.notifications


def main():

    if os.getenv("USR_") is not None and os.getenv("PWD_") is not None and os.getenv("AUTH_DB") is not None:
        mongo_client = MongoClient(f'mongodb://{os.getenv("USR_")}:{os.getenv("PWD_")}@{os.getenv("REMOTE_HOST")}:'
                       f'{os.getenv("REMOTE_PORT")}/{os.getenv("AUTH_DB")}')[os.getenv("MAIN_DB")]
    else:
        mongo_client = MongoClient(f'mongodb://{os.getenv("REMOTE_HOST")}:{os.getenv("REMOTE_PORT")}')[os.getenv("MAIN_DB")]

    mongo_client['users'].delete_many({})
    mongo_client['users'].insert_many(users)

    mongo_client['challenges'].delete_many({})
    mongo_client['challenges'].insert_many(challenges)

    mongo_client['notifications'].delete_many({})
    mongo_client['notifications'].insert_many(notifications)


if __name__ == '__main__':
    main()
