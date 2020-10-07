const {Video, Comment, Reply} = require('../models/video-Schema');

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
 
  const video = new Video(req.body);
  await video.save();
  return res.send(video);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});


module.exports = router;