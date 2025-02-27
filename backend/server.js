const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Allows frontend to connect
require('dotenv').config();
const authRoutes = require('./routes/authRoutes'); // Import routes
const connectDB = require('./config/db'); // Import DB connection

const app = express(); // Initialize app first
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enables cross-origin requests

// Connect to Database
connectDB();

// Routes
app.use('/auth', authRoutes); // Use routes AFTER app initialization

// Home Route
app.get('/', (req, res) => {
    res.send("<h1 align=center>Welcome to the MERN stack</h1>");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
