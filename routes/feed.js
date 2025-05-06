const express = require('express');
const axios = require('axios');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const redditResponse = await axios.get('https://www.reddit.com/r/reactjs.json');
    const posts = redditResponse.data.data.children.map(post => ({
      id: post.data.id,
      title: post.data.title,
      source: 'reddit',
      preview: post.data.selftext.substring(0, 100),
      url: `https://reddit.com${post.data.permalink}`
    }));
    res.json(posts);
  } catch (error) {
    console.error('Failed to fetch from Reddit:', error.message);
    res.status(500).json({ error: 'Failed to fetch Reddit posts' });
  }
});

module.exports = router;
