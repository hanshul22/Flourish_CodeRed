const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
