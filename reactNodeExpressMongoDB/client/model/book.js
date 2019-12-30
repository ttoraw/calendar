const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  published_date: { type:Date, default:Date.now }
});

//model은 데이터베이스에서 데이터를 읽고, 생성하고, 수정하는프로그래밍 인터페이스를 정의합니다.
module.exports = mongoose.model('book', bookSchema);
