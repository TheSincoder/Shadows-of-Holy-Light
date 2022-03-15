# Shadows of Holy Light
### Text Based RPG

#### To use this repo after cloning:
-  ```npm install```
-  ```npm start```

#### The Goal
I want to build a text based rpg for the table top game I've been developing for
the last 3 years. 

#### Elements

Accounts that can have multiple characters. These will be saved in a Postgresql database.
A storyline for the character to play through with multiple choices impacting the story and ending.
An in game shop that will allow the character to purchase and sell items which will impact their game play.
Meaningful combat with a dice mechanic. Combat should be obvious to player.

#### Pages
Login (Direct to Home Page)
Home Page
Logout (direct to Home Page)
Account
Character Creation
Shop
Rules Page
Game Play

#### Notes to help me in development

email api

need auth.py
api routes
database models

character interaction could work in both  react and the python api
best to handle all with react

save progress - game has a state
save all variables in a JSON and save to LS take it back out (Don't next JSONs)

#### Installs Used
##### React (Front End)

npm install @mui/icons-material
npm install @emotion/react 
npm install @emotion/styled
npm install apisauce
npm install base-64
npm install formik
npm install yup
npm install react-router-dom
npm install react-sound
npm install react-native-sound
npm install react-native-use-sound
npm install howler

##### Flask (Back End)

See Requirements.txt in Back End Folder


#### MVP

User can log in, create a basic character and play through one Quest with engaging combat

#### Additional Elements beyond MVP (In Order of Importance)

Add the Music
Add The Shop
An engaging storyline
Add stats to the character and enemies for dynamic combat


#### Problems and How I solved them

##### Missing script: "start"
Had two my folder in a folder. Had to delete all the installs out of the outer folder and open 
VSC in the inner folder

##### Music
Spent about 4 hours on it. Tried using the useSound documentation. Built in hook 'isPlaying' wasn't working. Used useState to set isPlaying and it worked!
Spent another two hours on looping the music, had to use Howler.js. Looping the music broke the
stop function. Had to call Howler.stop() instead of gameMusic.stop() and that worked!



