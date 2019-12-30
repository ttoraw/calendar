import express from 'express';
import Book from '../model/book';

const router = express.Router();
// const app = express()
// const router = express();
router.get('/bookList',(req, res)=>{
  console.log("router!!")

  Book.find(function(err, books) {
    console.log(books)
        if(err) return res.status(500).send({error:'database failure'});
        res.json(books);
      })
})

export default router;
// module.exports = function(app, Book){
//   //get all books
//   app.get('/api/books', function(req, res) {
//     Book.find(function(err, books) {
//       if(err) return res.status(500).send({error:'database failure'});
//       res.json(books);
//     })
//   });
//
//   //get single book
//   app.get('/api/books/:book_id', function(req, res) {
//     Book.findOne({_id: req.params.book_id}, function(err, book){
//           if(err) return res.status(500).json({error: err});
//           if(!book) return res.status(404).json({error: 'book not found'});
//           res.json(book);
//       })
//   });
//
//   //get book by author
//   app.get('/api/books/author/:author', function(req, res) {
//     Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
//         if(err) return res.status(500).json({error: err});
//         if(books.length === 0) return res.status(404).json({error: 'book not found'});
//         res.json(books);
//     })
//   });
//
//   //create the book
//   app.post('/api/books', function(req, res) {
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//     const book = new Book();
//     console.log(req.body.title, req.body.author, req.body.published_date)
//     book.title = req.body.title;
//     book.author = req.body.author;
//     book.published_date = new Date(req.body.published_date);
//
//     book.save(function(err) {
//       if(err){
//         console.error(err);
//         res.json({result: 0});
//         return;
//       }
//       res.json({result: 1});
//     })
//   });
//
//   //update the book
//   app.put('/api/books/:book_id', function(req, res) {
//     Book.findById(req.params.book_id, function(err, book){
//         if(err) return res.status(500).json({ error: 'database failure' });
//         if(!book) return res.status(404).json({ error: 'book not found' });
//
//         if(req.body.title) book.title = req.body.title;
//         if(req.body.author) book.author = req.body.author;
//         if(req.body.published_date) book.published_date = req.body.published_date;
//
//         book.save(function(err){
//             if(err) res.status(500).json({error: 'failed to update'});
//             res.json({message: 'book updated'});
//         });
//
//     });
//   });
//
//   // delete the book
//   app.delete('/api/books/:book_id', function(req, res) {
//     Book.remove({ _id: req.params.book_id }, function(err, output){
//       if(err) return res.status(500).json({ error: "database failure" });
//
//       /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
//       if(!output.result.n) return res.status(404).json({ error: "book not found" });
//       res.json({ message: "book deleted" });
//       */
//
//       res.status(204).end();
//     });
//   });
// }
