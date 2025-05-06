const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const { PORT } = process.env
const connectDB = require('./config/database');

connectDB.connect();


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('✅ MongoDB connected');
//     app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
//   })
//   .catch(err => console.error('❌ Mongo connection error:', err));

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at port ${PORT}...`);
  });