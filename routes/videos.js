const {Video, validateVideo, Comment, Reply} = require('../models/video-Schema');

const express = require('express');
const router = express.Router();

//Get all videos
router.get('/', async (req, res) => {
  try {
  const videos = await Video.find();
  return res.send(videos);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
}); 

//Get a video by ID
router.get('/:id', async (req, res) => {
  try {
  const video = await Video.findById(req.params.id);
  if (!video)
  return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
  return res.send(video);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
}); 

//Add a video
router.post('/', async (req, res) => {
  try {
  const { error } = validateVideo(req.body);
  if (error)
  return res.status(400).send(error);

  const video = new Video({
    videoId: req.body.videoId,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    comments: req.body.comments
    });
  await video.save();
  return res.send(video);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// Update LIKES or DISLIKES
router.put('/:id', async (req, res) => {
  try {
    const { error } = validateVideo(req.body);
  if (error) return res.status(400).send(error);
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    {
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    },
    { new: true }
  );
  if (!video)
    return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
  await video.save();
  return res.send(video);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});
 

module.exports = router;