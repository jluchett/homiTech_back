const express = require('express');
const router = express.Router();

const createCategory = require('../controllers/categories/createCategorie');
const getAllCategories = require('../controllers/categories/getAllCategories');
const getCategoryById = require('../controllers/categories/getCategoryById');
const updateCategory = require('../controllers/categories/updateCategory');

router.post('/add', createCategory);
router.get('/', getAllCategories);
router.get('/get/:id', getCategoryById);
router.put('/update/:id', updateCategory);

module.exports = router;