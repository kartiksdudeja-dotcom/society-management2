// ✅ Society Management Backend Server

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve React build files (optional for deployment)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Default backend route
app.get("/", (req, res) => {
  res.send("✅ Society Management Backend Running Successfully!");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
