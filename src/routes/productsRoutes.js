const express = require('express');
const router = express.Router();

const createProduct = require('../controllers/products/createProduct');
const getAllProducts = require('../controllers/products/getAllProducts');
const getProductById = require('../controllers/products/getProductById');

router.post('/add', createProduct);
router.get('/', getAllProducts);
router.get('/get/:id', getProductById);

module.exports = router;