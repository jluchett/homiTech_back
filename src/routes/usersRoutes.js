const express = require('express');
const router = express.Router();

const getAllUsers = require('../controllers/users/getAllUsers');
const getUserById = require('../controllers/users/getUserById');
const addUser = require('../controllers/users/addUser');
const updateUser = require('../controllers/users/updateUser');
const deleteUser = require('../controllers/users/deleteUser');

router.get('/', getAllUsers);
router.get('/get/:id', getUserById);
router.post('/add', addUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
