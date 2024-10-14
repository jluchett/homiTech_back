const express = require('express');
const router = express.Router();

const createShippingAddress = require('../controllers/shipping_address/addShippingAddres');
const getShippingAddressById = require('../controllers/shipping_address/getShippingAddressById');
const getAllShippingAddress = require('../controllers/shipping_address/getAllShippingAddress');
const updateShippingAddress = require('../controllers/shipping_address/updateShippingAddress');
const deleteShippingAddress = require('../controllers/shipping_address/deleteShippingAddress');
const getShippingAddressesByUserId = require('../controllers/shipping_address/getShippingAddresByUserId');

router.post('/add', createShippingAddress);
router.get('/get/:id', getShippingAddressById)
router.get('/', getAllShippingAddress);
router.put('/update/:id', updateShippingAddress);
router.delete('/delete/:id', deleteShippingAddress);
router.get('/getbyuser/:user_id', getShippingAddressesByUserId);

module.exports = router;