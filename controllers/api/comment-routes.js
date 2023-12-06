const router = require("express").Router();
const { Comment } = require('../../models');

// Get all comments
router.get('/comments', async (req, res) => {
    try {
      const comments = await Comment.findAll();
      res.status(200).json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({...req.body, UserId: req.session.user_id});
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;