require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDB =  require('./config/db');
const cors = require('cors'); // Import CORS

connectToDB()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json());

// Add this line after the middleware section
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
