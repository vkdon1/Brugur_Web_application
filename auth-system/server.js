const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRoutes = require("./user"); // Ensure user.js exports the necessary routes
const cors = require("cors");

const app = express();
app.use(express.json());
// Middleware
app.use(cors()); // For cross-origin requests if your frontend is hosted on a different domain
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://v3018404:v3018404@v-dongre01.qr41mi7.mongodb.net/?retryWrites=true&w=majority&appName=v-dongre01"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Secret for JWT
const JWT_SECRET = "supersecretkey";

// Sign-up Route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login Route
// app.post("/LoginCustomer", async (req, res) => {
app.post("/LoginCustomer", async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("Login request received", username, password); // Log received data

    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
  const port = 8081;
  console.log("server is running on port ",port);
});
