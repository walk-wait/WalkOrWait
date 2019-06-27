const express = require("express");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require('cookie-parser');
let MemoryStore = require('session-memory-store')(session);
const db = require("./models" );

const PORT = process.env.PORT || 3001;

// for body parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to passport
  //CODE HERE ---

//=== Quang ======
// Initialize passport and the express and passport session and add them as middleware
// For passport

app.use(session({secret: "123", resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// === / Quang ====

// Connect to Mongoose or Sequelize
  // CODE HERE ---

  //=======================================================================================
  //  I run testing but it doesn't work so just comment the below codes out temporarily 
  //========================================================================================

// Start the API server
// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
  // syncOptions.force = false;
// }

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
  // app.listen(PORT, function () {
    // console.log(
      // "==> 🌎  API Server now listening on port %s. Visit http://localhost:%s/ in your browser.",
      // PORT,
      // PORT
    // );
  // });
// });

// ==== Try to test :

// Models:
var models = require("./models");

// Synchronizing Database

models.sequelize.sync()
.then(function() {
  console.log("If you see this message, it means that the the connection with the dabase is OK!!")
}).catch(function(err) {
  console.log(err, "Woof, something went wrong!")
});