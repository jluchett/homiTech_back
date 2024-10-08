const express = require('express');
const router = express.Router();

const createCategory = require('../controllers/categories/createCategorie');
const getAllCategories = require('../controllers/categories/getAllCategories');

router.post('/add', createCategory);
router.get('/', getAllCategories);

module.exports = router;