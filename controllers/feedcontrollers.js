const { getFeeds } = require('../services/feedservices');

exports.fetchFeeds = async (req, res) => {
  try {
    const feeds = await getFeeds();
    res.json(feeds);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feeds' });
  }
};
