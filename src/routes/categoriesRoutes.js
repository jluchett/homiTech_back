const express = require('express');
const router = express.Router();

const createCategory = require('../controllers/categories/createCategorie');
const getAllCategories = require('../controllers/categories/getAllCategories');
const getCategoryById = require('../controllers/categories/getCategoryById');

router.post('/add', createCategory);
router.get('/', getAllCategories);
router.get('/get/:id', getCategoryById);

module.exports = router;