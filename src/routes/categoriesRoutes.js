const express = require('express');
const router = express.Router();

const createCategory = require('../controllers/categories/createCategorie');
const getAllCategories = require('../controllers/categories/getAllCategories');
const getCategoryById = require('../controllers/categories/getCategoryById');
const updateCategory = require('../controllers/categories/updateCategory');
const deleteCategory = require('../controllers/categories/deleteCategory');

router.post('/add', createCategory);
router.get('/', getAllCategories);
router.get('/get/:id', getCategoryById);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;