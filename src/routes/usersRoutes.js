const express = require('express');
const router = express.Router();

const getAllUsers = require('../controllers/users/getAllUsers');

router.get('/', getAllUsers);

module.exports = router;