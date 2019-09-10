# README

GamePlayce, a full CRUD application implementing Ruby, Rails, and React.JS alongside Postgresql. The application is a simple take on posting reviews for games that you can search via an API provided by GiantBomb. For more information on the API, visit https://www.giantbomb.com/

This application was built as part of a group project to fulfill General Assembly's project group requirements. 

Features of the Application:

* Ruby on Rails ; React ; Postgresql
  
* CRUD (Create, Read, Update, and Delete - User / Game Reviews

* Configuration
-Third Party API call to retrieve information on video games via a user search bar. The user can search (for the most part) any video game and the search should return a list of games that contain the wording in the title if not similar wording. The results will display pictures of the games, the game titles, and a short description or summary of what the game is. 

This was done using React.JS while making calls to a server-side database in Postgresql. This is explored in more detail below

* Database creation
The database consists of a single table for the main purpose of storing reviews posted/created by users of the application. It posts their username, an avatar (link to a personal image or fun image to use as an avatar for the review posting) and a positive, mixed, or negative review regarding the game that they searched for. The posting also stores the Game Title for the review. One of the challenges of this application was attempting to figure out how to properly render the reviews for the games that were searched for. Initially, we had only displayed and rendered 1 game when making a call to the API. But one of our group members was sucessful in displaying multiple results for a single search Query. While we ran out of time to try and figure out how to code in the correct data join based on what the user entered in the search bar, with more time we are confident that it would have been solved.

* Database initialization
The database as mentioned has a single table with an Id, Username, Avatar, Body, and Game Title(name). This was initialized prior to making any requests to the API.

* Deployment instructions
This application is currently deployed via heroku at the following url: 
