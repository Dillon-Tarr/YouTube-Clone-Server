const mongoose = require('mongoose');
const Joi = require('joi');

const replySchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1, maxlength: 1000 },
  postTime: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1, maxlength: 1000 },
  replies: { type: [replySchema] },
  postTime: { type: Date, default: Date.now }
});

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  comments: { type: [commentSchema] },
  postTime: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', videoSchema);

function validateVideo(video) {
  const schema = Joi.object({
  videoId: Joi.string().required(),
  likes: Joi.number().required(),
  dislikes: Joi.number().required(),
  comments: Joi.array().required()
  });
  return schema.validate(video);
}

module.exports.Video = Video;
module.exports.validateVideo = validateVideo;