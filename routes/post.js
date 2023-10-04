const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');


router.get('/create', postController.createPost);
router.post('/add', postController.addPost);

router.get('/:id/edit', postController.editPost);
router.put('/:id/update', postController.update);

router.delete('/:id/delete', postController.deleteBlog);

router.post('/:id/comment', postController.addComment);

router.get('/:id', postController.viewPostDetail);


module.exports = router;