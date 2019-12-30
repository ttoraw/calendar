import express from 'express';
import book from './book';
import todo from './todo';

const router = express.Router();

// router.use('/*', (req, res, next) => {
//     res.setHeader("Expires", "-1");
//     res.setHeader("Cache-Control", "must-revalidate, private");
//     next();
// });

router.use('/books', book);
router.use('/todos', todo);

export default router;
