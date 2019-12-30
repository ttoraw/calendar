const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나동빈',
  'birthday': '960508',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '961127',
  'gender': '남자',
  'job': '디자이너'
  }
  ]);
});


app.listen(port, () => console.log(`Listening on port ${port}`));



const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server")
});

mongoose.connect('mongodb://localhost/mongodb_tutorial')
// const router = require("./routes")(app)
const Book = require('./client/model/book');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// const port = process.env.PORT || 8080;
const router = require('./client/route')(app, Book);
// const server = app.listen(port, function() {
//   console.log("Express server has started on port " + port);
// })
