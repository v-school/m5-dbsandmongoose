# Adding Mongoose and Mongodb to an express server in node

  * This repository is the starting code for module 5 that gives you:
    - An express server with routes for tv shows and movies
    - All data is currently "fake" - aka not tied to an actual database
    - A front end held in the `client` folder created with React.

  * To see the app live:
    - In your termial in the `root directory`:
      1. run `npm install`
      2. Use the command `nodemon server.js` to start the server
        ( if you haven't installed nodemon globally, do this and the try the above command again)
    - Next open a second terminal window and `cd` into the `client directory`. From there:
      1. run `npm install`
      2. Use the command `npm start` to start the React dev server.
    - Open a web browser and visit `localhost:3000` to view/test the application

  * You can use this code to follow along with the lessons while you are taken through the process of:
    - Using Mongoose to connect your express server to a local `MongoDB` database.
    - Building Mongoose Models to start saving data to MongoDB.
    - Update the `movieRouter` file so that it now interacts with MongoDB data instead of
      the "fake" array of objects data held in the `movieRouter` file.

  
  ## Things to Note
    * The `package.json` file on the front end has an added `proxy` key: value pair that will
      automatically proxy your HTTP requests to your server running on localhost port 9000.  
      This avoids having to set up any CORS rules.
    * Nothing is done with the `tvshowRouter` file in this series, though you are encouraged to build
      it out like the `movieRouter` file and make it functional with your front end application.
    * Have fun!