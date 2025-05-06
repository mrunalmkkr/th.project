const express = require('express');
const { authenticate, isAdmin } = require('../middleware/auth');
const User = require('../models/user');
const Transaction = require('../models/transactions');

const router = express.Router();

router.get('/stats', authenticate, isAdmin, async (req, res) => {
  const topUsers = await User.find().sort({ credits: -1 }).limit(5);
  const totalTransactions = await Transaction.countDocuments();
  res.json({ topUsers, totalTransactions });
});

module.exports = router;
