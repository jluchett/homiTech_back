const express = require('express');
const router = express.Router();

const createShippingAddress = require('../controllers/shipping_address/addShippingAddres');
const getShippingAddressById = require('../controllers/shipping_address/getShippingAddressById');

router.post('/add', createShippingAddress);
router.get('/get/:id', getShippingAddressById)

module.exports = router;