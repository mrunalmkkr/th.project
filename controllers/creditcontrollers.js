const User = require('../models/user');
const Transaction = require('../models/transactions');

exports.earnCredits = async (req, res) => {
  const { amount, reason } = req.body;
  await Transaction.create({ userId: req.user.userId, amount, type: 'earn', reason });
  await User.findByIdAndUpdate(req.user.userId, { $inc: { credits: amount } });
  res.json({ message: 'Credits earned' });
};

exports.spendCredits = async (req, res) => {
  const { amount, reason } = req.body;
  const user = await User.findById(req.user.userId);
  if (user.credits < amount) return res.status(400).json({ error: 'Insufficient credits' });

  await Transaction.create({ userId: req.user.userId, amount, type: 'spend', reason });
  user.credits -= amount;
  await user.save();
  res.json({ message: 'Credits spent' });
};
