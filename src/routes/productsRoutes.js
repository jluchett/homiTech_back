const express = require('express');
const router = express.Router();

const createProduct = require('../controllers/products/createProduct');
const getAllProducts = require('../controllers/products/getAllProducts');

router.post('/add', createProduct);
router.get('/', getAllProducts);

module.exports = router;