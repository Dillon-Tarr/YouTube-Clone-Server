const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1, maxlength: 1000 },
  dateInMS: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1, maxlength: 1000 },
  replies: { type: [replySchema] },
  dateInMS: { type: Date, default: Date.now }
});

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  comments: { type: [commentSchema] },
});

const Reply = mongoose.model('Reply', replySchema);

const Comment = mongoose.model('Comment', commentSchema);

const Video = mongoose.model('Video', videoSchema);

module.exports.Reply = Reply;
module.exports.Comment = Comment;
module.exports.Video = Video;