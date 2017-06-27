const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Article = require("./models/Article.js");
const PORT = 3000 || process.env.PORT;

//use morgan logger and bodyparser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serves static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

//mongoose connection
let db = mongoose.connection;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(`mongodb://localhost/danelReactHomeWork`);
}

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// Starting our express server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
