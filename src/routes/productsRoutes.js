const express = require('express');
const router = express.Router();

const createProduct = require('../controllers/products/createProduct');

router.post('/add', createProduct);

module.exports = router;