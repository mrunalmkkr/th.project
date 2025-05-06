const User = require('../models/user');
const Transaction = require('../models/transactions');

exports.getStats = async (req, res) => {
  const topUsers = await User.find().sort({ credits: -1 }).limit(5);
  const txCount = await Transaction.countDocuments();
  res.json({ topUsers, txCount });
};
