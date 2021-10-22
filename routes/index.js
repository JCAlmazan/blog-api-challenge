// Controllers
const postController = require('../controllers/post');

module.exports = (app) => {

  // List all posts route
  app.get('/posts', postController.list);
  // Find post by Id and show details route
  app.get('/posts/:id', postController.findById);
  // Create post route
  app.post('/posts', postController.create);
  // Update post route
  app.patch('/posts/:id', postController.update);
  // Delete post route
  app.delete('/posts/:id', postController.delete);

};