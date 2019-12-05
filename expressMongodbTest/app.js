const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server")
});

mongoose.connect('mongodb://localhost/mongodb_tutorial')
// const router = require("./routes")(app)
const Book = require('./models/book');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
const router = require('./routes')(app, Book);
const server = app.listen(port, function() {
  console.log("Express server has started on port " + port);
})
