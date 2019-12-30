// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  todo: String,
  date: { type:Date, default:Date.now },
  order: Number,
  complete: {type: Boolean, default: false}  
});

//model은 데이터베이스에서 데이터를 읽고, 생성하고, 수정하는프로그래밍 인터페이스를 정의합니다.
// module.exports = mongoose.model('book', bookSchema);
export default mongoose.model('todo', todoSchema);
