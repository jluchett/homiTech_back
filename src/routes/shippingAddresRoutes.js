const express = require('express');
const router = express.Router();

const createShippingAddress = require('../controllers/shipping_address/addShippingAddres');

router.post('/add', createShippingAddress);

module.exports = router;