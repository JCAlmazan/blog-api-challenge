// Post model
const Post = require("../models").post;

// Image url validator
const isImageURL = require('image-url-validator').default;


module.exports = {

  // List all posts ordered by creation date descendant
  async list(req, res) {
    try {
      const posts = await Post.findAll({
        order: [['createdAt', 'DESC']]
      })
      res.status(201).send(posts)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },

  // Find a post by id
  async findById(req, res) {
    try {
      const post = await Post.findOne({
        where: { id: req.params.id }
      })
      if (post) {
        res.status(201).send(post)
      } else {
        res.status(404).send("Post Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Create a new post using body data
  async create(req, res) {
    try {
      const isImage = await isImageURL(req.body.imageUrl);
      if (isImage) {
        const post = await Post.create({
          title: req.body.title,
          content: req.body.content,
          imageUrl: req.body.imageUrl,
          categoryId: req.body.categoryId,
        });
        res.status(201).send(post);
      } else {
        res.status(400).send("Wrong Url, please enter a valid image url!")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Update post by id using body data
  async update(req, res) {
    try {
      const post = await Post.findOne({
        where: { id: req.params.id }
      })
      if (post) {
        await Post.update(req.body, {
          where: {
            id: req.params.id
          }
        })
        res.status(201).send("Post updated")
      } else {
        res.status(404).send("Post Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Delete specific post by id
  async delete(req, res) {
    try {
      const post = await Post.findOne({
        where: { id: req.params.id }
      })
      if (post) {
        await Post.destroy({
          where: {
            id: req.params.id
          }
        })
        res.status(201).send("Post deleted")
      } else {
        res.status(404).send("Post Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

}