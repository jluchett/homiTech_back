const express = require('express');
const router = express.Router();

const createProduct = require('../controllers/products/createProduct');
const getAllProducts = require('../controllers/products/getAllProducts');
const getProductById = require('../controllers/products/getProductById');
const updateProduct = require('../controllers/products/updateProduct');
const deleteProduct = require('../controllers/products/deleteProduct');

router.post('/add', createProduct);
router.get('/', getAllProducts);
router.get('/get/:id', getProductById);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;