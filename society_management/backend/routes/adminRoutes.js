// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/users', protect, adminOnly, adminCtrl.listUsers);
router.post('/users', protect, adminOnly, adminCtrl.createUser);
router.put('/users/:id', protect, adminOnly, adminCtrl.updateUser);
router.delete('/users/:id', protect, adminOnly, adminCtrl.deleteUser);

module.exports = router;
