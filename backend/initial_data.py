from datetime import datetime
################# Challenges #################
challenges = [
{
    'name': "Quarantine Family Pic",
    'owner': {
        'id': 1,
        'name': "Manuel"
    },
    'challenge_id': 1,
    'description': "Make a quarantine picture with your family",
    'private': False,
    'participants': [1, 2],
    'tags': ["#quarantinesquad"],
    'likes': [1, 2],
    'costs': 0,
    'completed_users': [1],
    'deadline': datetime.now(),
    'proof': "image",
    'picture_id': 0,
    'bet': "bet bet bet",
    'voting': False,
},
{
    'name': "Show your mask",
    'owner': {
        'id': 1,
        'name': "Manuel"
    },
    'challenge_id': 2,
    'description': "Make a picture with your corona mask",
    'private': False,
    'participants': [1, 2],
    'tags': ["#coromask"],
    'likes': [1, 2],
    'costs': 0,
    'completed_users': [1],
    'deadline': datetime.now(),
    'proof': "image",
    'picture_id': 0,
    'bet': "bet bet bet",
    'voting': False,
},
{
    'name': "Drink up",
    'owner': {
        'id': 1,
        'name': "Manuel"
    },
    'challenge_id': 3,
    'description': "Finish a 0,3L drink as fast as possible.",
    'private': False,
    'participants': [1, 2],
    'tags': ["#quarantinesquad"],
    'likes': [1, 2],
    'costs': 0,
    'completed_users': [1],
    'deadline': datetime.now(),
    'proof': "image",
    'picture_id': 0,
    'bet': "bet bet bet",
    'voting': False,
},
{
    'name': "Facetime your Grandma",
    'owner': {
        'id': 1,
        'name': "Manuel"
    },
    'challenge_id': 4,
    'description': "Factime with your grandma and wish her a great day",
    'private': False,
    'participants': [1, 2],
    'tags': ["#grandmatime"],
    'likes': [1, 2],
    'costs': 0,
    'completed_users': [1],
    'deadline': datetime.now(),
    'proof': "image",
    'picture_id': 0,
    'bet': "bet bet bet",
    'voting': False,
},
{
    'name': "Corona Chef ",
    'owner': {
        'id': 1,
        'name': "Manuel"
    },
    'challenge_id': 5,
    'description': "Cook your favourite meal during Corona",
    'private': False,
    'participants': [1, 2],
    'tags': ["#cookcona"],
    'likes': [1, 2],
    'costs': 0,
    'completed_users': [1],
    'deadline': datetime.now(),
    'proof': "image",
    'picture_id': 0,
    'bet': "bet bet bet",
    'voting': False,
}
]


################# Users #################
users = [
{
    'name': "Manuel",
    'user_id': 1,
    'friends_ids': [2, 3, 4, 5, 6, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Minh-Kha",
    'user_id': 2,
    'friends_ids': [1, 3, 4, 5, 6, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Arne",
    'user_id': 3,
    'friends_ids': [1, 2, 4, 5, 6, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Malte",
    'user_id': 4,
    'friends_ids': [1, 2, 3, 5, 6, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Niels",
    'user_id': 5,
    'friends_ids': [1, 2, 3, 4, 6, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Timo",
    'user_id': 6,
    'friends_ids': [1, 2, 3, 4, 5, 42],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Marius",
    'user_id': 42,
    'friends_ids': [1, 2, 3, 4, 5, 6],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
}
]



################# Notifications #################
notifications = [
{
    'content': "this is a notification 1",
    'notification_id': "1",
    'user_id': "42",
    'new': True,
},
{
    'content': "this is a notification 1",
    'notification_id': "1",
    'user_id': "42",
    'new': True,
},
{
    'content': "this is a notification 1",
    'notification_id': "1",
    'user_id': "42",
    'new': True,
}
]

