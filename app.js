// Form Submission Server (Port 5000)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Set view engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection and model
mongoose.connect(
  "mongodb+srv://v3018404:v3018404@v-dongre01.qr41mi7.mongodb.net/?retryWrites=true&w=majority&appName=v-dongre01",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const FormData = mongoose.model("FormData", formSchema);
app.get("/form", (req, res) => {
  res.render("form"); // 'form' corresponds to form.ejs in the 'views' folder
});

// POST route for form submission
app.post("/submit-form", (req, res) => {
  const formData = new FormData({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body["confirm-password"],
  });

  formData
    .save()
    .then(() => {
      console.log("Data saved successfully");
      res.redirect("https://9c9w8d-5500.csb.app/"); // Redirect to the main app
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.status(500).send("Error saving data");
    });
});

// Define your schema and model

// Start the form submission server
app.listen(3000, () => {
  console.log("Form submission server running on http://localhost:3000");
});
