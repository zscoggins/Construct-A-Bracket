const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const teamRoutes = require('../routes/teamRoutes');
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/teams', teamRoutes);

// Database connection
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Server setup
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    console.log(`Error: ${error.message}`.trimEnd.underline);
    process.exit(1)
  }
}

module.exports = connectDB