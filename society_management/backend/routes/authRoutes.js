const express = require("express");
const router = express.Router();

// make sure filename & path are correct
const authController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/profile", protect, authController.getProfile);

module.exports = router;
