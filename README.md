<img width="40%" align="right" src="demo.gif">

# YourTurn

YourTurn enables everyone to stay connected during the Corona crisis. In our app, people can create challenge, invite their friends, find challenges in their neighborhood and win prizes. Do you have it to show everyone you're the best in removing trash in the forest or to show a bike champion that you can do a wheelie while wearing a face mask?

Furthermore, YourTurn users can create public and private challenges with or without prizes. Also, they can chose to donate a certain amount of the prize pool for social causes.

We built a native App with React Native. In this way, we generated native Apps for Android, iOS and the web. We connected our App to a FastAPI backend that is deployed on Amazon Web Services. To ease the hosting and deployment, we are running the backend inside a Docker container. The backend accesses data from a MongoDB that is also hosted on AWS.

## Start backend
* Run `pip3 install -r requirements.txt` to install the needed requirements.
* Run `uvicorn main:app --reload` inside the backend folder.

## Start frontend
* Run `npm install` in the frontend folder to install the required node modules.
* Run `npm start` to start the application with expo. Additional flags are `--android`, `--ios` or `--web` for the corresponding sources.
