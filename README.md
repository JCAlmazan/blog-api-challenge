## Challenge Backend Warm UP

# Welcome to my Blog API Challenge

Blog API using Node, Express and sequelize to manage blog posts.

## How to execute the application

* Clone or download this proyect into a local folder

* Open a terminal into this new folder

* Execute ```npm install``` to install dependencies

* Duplicate your config/configExample.json file and rename it config.json

* Modify this new config/config.json file with your database info

* Start Apache & MySQL server on your Operating System

* Execute ```npm run setup``` to set up your database

* Execute ```npm start``` to start the application

* Root url will be at http://localhost:3000/ by default

* Now you can use this API!

## Endpoints

* ```GET /posts``` to list all posts ordered by creation date descendant

* ```GET /posts/:id``` to find post by Id and show details

* ```POST /posts``` to create a new post using body data

* ```PATCH /posts/:id``` to update post by id using body data

* ```DELETE /posts/:id``` to delete specific post by id

You can find endpoint documentation in /static/BlogApiChallenge.postman_collection.json file


