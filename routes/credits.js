const express = require('express');
const { authenticate } = require('../middleware/auth');
const Transaction = require('../models/transactions');
const User = require('../models/user');

const router = express.Router();

router.post('/earn', authenticate, async (req, res) => {
  const { amount, reason } = req.body;
  await Transaction.create({ userId: req.user.userId, amount, type: 'earn', reason });
  await User.findByIdAndUpdate(req.user.userId, { $inc: { credits: amount } });
  res.json({ message: 'Credits earned' });
});

router.post('/spend', authenticate, async (req, res) => {
  const { amount, reason } = req.body;
  const user = await User.findById(req.user.userId);
  if (user.credits < amount) return res.status(400).json({ error: 'Not enough credits' });

  await Transaction.create({ userId: req.user.userId, amount, type: 'spend', reason });
  user.credits -= amount;
  await user.save();
  res.json({ message: 'Credits spent' });
});

module.exports = router;
