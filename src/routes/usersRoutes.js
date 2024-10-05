const express = require('express');
const router = express.Router();

const getAllUsers = require('../controllers/users/getAllUsers');
const getUserById = require('../controllers/users/getUserById');

router.get('/', getAllUsers);
router.post('/get/:id', getUserById);

module.exports = router;