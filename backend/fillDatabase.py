from pymongo import MongoClient
import os
import initial_data

users = initial_data.users
challenges = initial_data.challenges
notifications = initial_data.notifications


def main():
    mongo_client = MongoClient(f'mongodb://{os.getenv("REMOTE_HOST")}:{os.getenv("REMOTE_PORT")}')[os.getenv("MAIN_DB")]

    mongo_client['users'].delete_many({})
    mongo_client['users'].insert_many(users)

    mongo_client['challenges'].delete_many({})
    mongo_client['challenges'].insert_many(challenges)

    mongo_client['notifications'].delete_many({})
    mongo_client['notifications'].insert_many(notifications)


if __name__ == '__main__':
    main()
