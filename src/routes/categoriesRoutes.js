const express = require('express');
const router = express.Router();

const createCategory = require('../controllers/categories/createCategorie');

router.post('/add', createCategory);

module.exports = router;