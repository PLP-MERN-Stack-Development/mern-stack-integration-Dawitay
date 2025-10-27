import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("category").populate("author", "name");
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("category").populate("author", "name");
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

export const createPost = async (req, res) => {
  const { title, content, category } = req.body;
  const post = await Post.create({ title, content, category, author: req.user._id });
  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.category = req.body.category || post.category;
  const updated = await post.save();
  res.json(updated);
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  await post.deleteOne();
  res.json({ message: "Post removed" });
};
