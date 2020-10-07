const Reply = require('../models/models');
const Comment = require('../models/models');
const Video = require('../models/models');

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
 
  const video = new Video({
  videoId: 'some video ID',
  });
  await video.save();
  return res.send(video);
  } catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});


module.exports = router;