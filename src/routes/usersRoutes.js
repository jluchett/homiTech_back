const express = require('express');
const router = express.Router();

const getAllUsers = require('../controllers/users/getAllUsers');
const getUserById = require('../controllers/users/getUserById');
const addUser = require('../controllers/users/addUser');

router.get('/', getAllUsers);
router.get('/get/:id', getUserById);
router.post('/add', addUser);

module.exports = router;
