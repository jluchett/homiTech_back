const express = require('express');
const router = express.Router();

const createShippingAddress = require('../controllers/shipping_address/addShippingAddres');
const getShippingAddressById = require('../controllers/shipping_address/getShippingAddressById');
const getAllShippingAddress = require('../controllers/shipping_address/getAllShippingAddress');

router.post('/add', createShippingAddress);
router.get('/get/:id', getShippingAddressById)
router.get('/', getAllShippingAddress);

module.exports = router;