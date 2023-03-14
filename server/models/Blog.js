const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const blogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
