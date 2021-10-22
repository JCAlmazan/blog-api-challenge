const Post = require("../models").post;

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
      const posts = await Post.findOne({
        where: { name: req.params.id }
      })
      if (posts) {
        res.status(201).send(posts)
      } else {
        res.status(404).send("Post Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

}