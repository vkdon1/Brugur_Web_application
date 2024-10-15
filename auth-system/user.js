// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const express = require("express");
// Define user schema
const app = express();
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User model
const User = mongoose.model("User", userSchema);

// Define the signup route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body); // Log the request body to ensure data is received

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = new User({ username, password });
    await user.save(); // Save the user to MongoDB
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err); // Log any errors
    res.status(500).json({ message: "Internal server error" });
  }
});
