from backend.models import Challenge, User
from datetime import datetime, timedelta
from dotenv import load_dotenv
import os
from pymongo import MongoClient
import random

load_dotenv()

# CREATE USERS

manuel = User(
    name="Manuel",
    email="manuellang183@gmail.com",
    full_name="Manuel Lang",
    disabled=False,
    friends_ids=[2, 3, 4, 5, 6, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

minhkha = User(
    name="Minh-Kha",
    email="minhkha@yourturn.com",
    full_name="Minh-Kha Nguyen",
    disabled=False,
    friends_ids=[1, 3, 4, 5, 6, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

timo = User(
    name="Timo",
    email="timo@yourturn.com",
    full_name="Timo Keßler",
    disabled=False,
    friends_ids=[1, 2, 4, 5, 6, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

nils = User(
    name="Nils",
    email="nils@yourturn.com",
    full_name="Nils Keßler",
    disabled=False,
    friends_ids=[1, 2, 3, 5, 6, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

malte = User(
    name="Malte",
    email="malte@yourturn.com",
    full_name="Malte Fornell",
    disabled=False,
    friends_ids=[1, 2, 3, 4, 6, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

arne = User(
    name="Arne",
    email="arne@yourturn.com",
    full_name="Arne Fornell",
    disabled=False,
    friends_ids=[1, 2, 3, 4, 5, 7],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

marius = User(
    name="Marius",
    email="marius@yourturn.com",
    full_name="Marius Bauer",
    disabled=False,
    friends_ids=[1, 2, 3, 4, 5, 6],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

anna = User(
    name="Anna",
    email="anna@yourturn.com",
    full_name="Anna",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

eva = User(
    name="Eva",
    email="eva@yourturn.com",
    full_name="Eva",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

larissa = User(
    name="Larissa",
    email="larissa@yourturn.com",
    full_name="Larissa",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

lisa = User(
    name="Lisa",
    email="lisa@yourturn.com",
    full_name="Lisa",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

joana = User(
    name="joana",
    email="Joana@yourturn.com",
    full_name="joana",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

luisa = User(
    name="Luisa",
    email="luisa@yourturn.com",
    full_name="Luisa",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

alisa = User(
    name="Alisa",
    email="alisa@yourturn.com",
    full_name="Alisa",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

barbara = User(
    name="Barbara",
    email="barbara@yourturn.com",
    full_name="Barbara",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

jennifer = User(
    name="Jennifer",
    email="jennifer@yourturn.com",
    full_name="Jennifer",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

jonas = User(
    name="Jonas",
    email="jonas@yourturn.com",
    full_name="Jonas",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

michael = User(
    name="Michael",
    email="michael@yourturn.com",
    full_name="Michael",
    disabled=False,
    friends_ids=[],
    bookmarks=[],
    challenges=[],
    completed_challenges=[],
    notifications=[]
)

users = [manuel, minhkha, timo, nils, arne, marius, anna, eva, larissa, lisa, joana, luisa, alisa, barbara, jennifer,
         jonas, michael]

# CREATE CHALLENGES

user_dicts = [
    {'id': 1, 'name': 'Manuel'},
    {'id': 2, 'name': 'Minh-Kha'},
    {'id': 3, 'name': 'Timo'},
    {'id': 4, 'name': 'Niels'},
    {'id': 5, 'name': 'Malte'},
    {'id': 6, 'name': 'Arne'},
    {'id': 7, 'name': 'Marius'},
    {'id': 8, 'name': 'Anna'},
    {'id': 9, 'name': 'Eva'},
    {'id': 10, 'name': 'Larissa'},
    {'id': 11, 'name': 'Lisa'},
    {'id': 12, 'name': 'Joana'},
    {'id': 13, 'name': 'Luisa'},
    {'id': 14, 'name': 'Alisa'},
    {'id': 15, 'name': 'Barbara'},
    {'id': 16, 'name': 'Jennifer'},
    {'id': 17, 'name': 'Jonas'},
    {'id': 18, 'name': 'Michael'}
]

c1 = Challenge(
    name="Quarantine Family Pic",
    owner={
        "id": 1,
        "name": "Manuel"
    },
    hashtag="quarantinesquad",
    description="Make a quarantine picture with your family",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Social"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c2 = Challenge(
    name="Show your mask",
    owner=random.sample(user_dicts, 1),
    hashtag="coronamask",
    description="Make a picture with your corona mask",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Social"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c3 = Challenge(
    name="Drink up",
    owner=random.sample(user_dicts, 1),
    hashtag="drinkup",
    description="Finish a 0,3L drink as fast as possible",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Social"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c4 = Challenge(
    name="Facetime your Grandma",
    owner=random.sample(user_dicts, 1),
    hashtag="grandmatime",
    description="Factime with your grandma and wish her a great day",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Social"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c5 = Challenge(
    name="Corona Chef",
    owner=random.sample(user_dicts, 1),
    hashtag="cookcona",
    description="Cook your favourite meal during Corona",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Social"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c6 = Challenge(
    name="Kickflip-Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="doakickflip",
    description="Do a kickflip",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sport"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c7 = Challenge(
    name="Juggling with football",
    owner=random.sample(user_dicts, 1),
    hashtag="juggling",
    description="Juggle with a football at least 40 times",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sport"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Video",
    picture_id=1,
    bet="Coins",
    voting=False
)

c8 = Challenge(
    name="Plank time",
    owner=random.sample(user_dicts, 1),
    hashtag="planktime",
    description="Hold the plank position as long as possible",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sport"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Video",
    picture_id=1,
    bet="Coins",
    voting=False
)

c9 = Challenge(
    name="Yoga Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="downwardfacingdog",
    description="Do your favorite yoga pose and take a photo",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sport"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Video",
    picture_id=1,
    bet="Coins",
    voting=False
)

c10 = Challenge(
    name="Chess Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="checkmateyourchessmate",
    description="Checkmate your chess mate and post their sad face",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sport"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c11 = Challenge(
    name="Homeoffice Setup",
    owner=random.sample(user_dicts, 1),
    hashtag="homeofficeing",
    description="Show us how you are working from home",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Creative"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c12 = Challenge(
    name="Hamster-Selfie",
    owner=random.sample(user_dicts, 1),
    hashtag="hamstering",
    description="Take a picture with the product you have stocked up during Corona",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Creative"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c13 = Challenge(
    name="Corona Parenting Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="parentingthroughcorona",
    description="How do you keep your kids busy? Show us!",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Creative"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c14 = Challenge(
    name="The perfect mask",
    owner=random.sample(user_dicts, 1),
    hashtag="perfectmask",
    description="Who has the coolest corona mask? Take a picture of you and your mask.",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Creative"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c15 = Challenge(
    name="Homeoffice Outfit",
    owner=random.sample(user_dicts, 1),
    hashtag="homeofficestyle",
    description="How do you dress up during Corona?",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Creative"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c16 = Challenge(
    name="Barcelona Sundown Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="sundowner",
    description="Show us your favourite spot in the evening",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Location"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c17 = Challenge(
    name="Support your locals Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="supportyourlocals",
    description="Show us how you support your local shops",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Location"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c18 = Challenge(
    name="Neighbour trash race",
    owner=random.sample(user_dicts, 1),
    hashtag="neighbourtrashrace",
    description="Stop the time how long you need to take out the trash",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Location"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c19 = Challenge(
    name="Dialect Challenge",
    owner=random.sample(user_dicts, 1),
    hashtag="dialecting",
    description="Take a video of yourself saying your favourite word in your local dialect.",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Location"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Video",
    picture_id=1,
    bet="Coins",
    voting=False
)

c20 = Challenge(
    name="Balcony concert",
    owner=random.sample(user_dicts, 1),
    hashtag="coronaconcert",
    description="Sing a song to your lovely neighbors.",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Location"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c21 = Challenge(
    name="Trash-Tag",
    owner=random.sample(user_dicts, 1),
    hashtag="trashtag",
    description="Fill a garbage bag with litter you find in the nature",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sustainability"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c22 = Challenge(
    name="Plant a tree",
    owner=random.sample(user_dicts, 1),
    hashtag="treeplanting",
    description="Do something for mother earth and plant a tree! ",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sustainability"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c23 = Challenge(
    name="Self-sufficient",
    owner=random.sample(user_dicts, 1),
    hashtag="selfsufficient",
    description="Take a picture of your “self-sufficient” garden/plants",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sustainability"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c24 = Challenge(
    name="Showertimer",
    owner=random.sample(user_dicts, 1),
    hashtag="showertime",
    description="Shower as fast as you can",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sustainability"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

c25 = Challenge(
    name="Take the bike to work",
    owner=random.sample(user_dicts, 1),
    hashtag="biketowork",
    description="Take a picture of yourself on a bike on your way to work",
    private=False,
    participants=random.sample(user_dicts, random.randint(2, 5)),
    tags=["Sustainability"],
    likes=random.sample(range(1, 19), random.randint(0, 10)),
    costs=0,
    completed_users=[2],
    deadline=datetime.now() + timedelta(days=random.randint(10, 50)),
    proof="Picture",
    picture_id=1,
    bet="Coins",
    voting=False
)

challenges = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23,
              c24, c25]

mongo_client = MongoClient(f'mongodb+srv://{os.getenv("DB_USR_")}:{os.getenv("DB_PWD_")}@{os.getenv("DB_HOST")}/'
                           f'{os.getenv("AUTH_DB")}')[os.getenv("MAIN_DB")]

mongo_client["users"].drop()
mongo_client["challenges"].drop()
mongo_client["notifications"].drop()

for index, user in enumerate(users):
    user.user_id = index + 1
    mongo_client["users"].insert_one(user.to_dict())

for index, challenge in enumerate(challenges):
    challenge.challenge_id = index + 1
    mongo_client["challenges"].insert_one(challenge.to_dict())
