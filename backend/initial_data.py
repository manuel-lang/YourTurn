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
    'participants': [{'id': 1, 'name': 'Manuel'}, {'id': 2, 'name': 'Minh-Kha'}],
    'tags': ["quarantinesquad"],
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
    'participants': [{'id': 1, 'name': 'Manuel'}, {'id': 2, 'name': 'Minh-Kha'}],
    'tags': ["coromask"],
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
    'participants': [{'id': 1, 'name': 'Manuel'}, {'id': 2, 'name': 'Minh-Kha'}],
    'tags': ["quarantinesquad"],
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
    'participants': [{'id': 1, 'name': 'Manuel'}, {'id': 2, 'name': 'Minh-Kha'}],
    'tags': ["grandmatime"],
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
    'participants': [{'id': 1, 'name': 'Manuel'}, {'id': 2, 'name': 'Minh-Kha'}],
    'tags': ["cookcona"],
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
    'friends_ids': [
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 3, 'name': 'Timo'},
        {'id': 4, 'name': 'Niels'},
        {'id': 5, 'name': 'Malte'},
        {'id': 6, 'name': 'Arne'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Minh-Kha",
    'user_id': 2,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 3, 'name': 'Timo'},
        {'id': 4, 'name': 'Niels'},
        {'id': 5, 'name': 'Malte'},
        {'id': 6, 'name': 'Arne'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Timo",
    'user_id': 3,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 4, 'name': 'Niels'},
        {'id': 5, 'name': 'Malte'},
        {'id': 6, 'name': 'Arne'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Niels",
    'user_id': 4,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 3, 'name': 'Timo'},
        {'id': 5, 'name': 'Malte'},
        {'id': 6, 'name': 'Arne'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Malte",
    'user_id': 5,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 3, 'name': 'Timo'},
        {'id': 4, 'name': 'Niels'},
        {'id': 6, 'name': 'Arne'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Arne",
    'user_id': 6,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 3, 'name': 'Timo'},
        {'id': 4, 'name': 'Niels'},
        {'id': 5, 'name': 'Malte'},
        {'id': 7, 'name': 'Marius'},

    ],
    'bookmarks': [],
    'challenges': [],
    'completed_challenges': [],
    'notifications': [],
},
{
    'name': "Marius",
    'user_id': 7,
    'friends_ids': [
        {'id': 1, 'name': 'Manuel'},
        {'id': 2, 'name': 'Minh-Kha'},
        {'id': 3, 'name': 'Timo'},
        {'id': 4, 'name': 'Niels'},
        {'id': 5, 'name': 'Malte'},
        {'id': 6, 'name': 'Arne'},

    ],
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

