const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  replies: { type: [String] },
});

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  comments: { type: [commentSchema] },
});

const Comment = mongoose.model('Comment', commentSchema);

const Video = mongoose.model('Video', videoSchema);
