// Controllers
const postController = require('../controllers/post');

module.exports = (app) => {

  // List all posts route
  app.get('/posts', postController.list);

};