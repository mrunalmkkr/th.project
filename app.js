const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const creditRoutes = require('./routes/credits');
const feedRoutes = require('./routes/feed');
const adminRoutes = require('./routes/admin');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/credits', creditRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;
