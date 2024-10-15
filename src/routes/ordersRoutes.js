const express = require('express');
const router = express.Router();

const createOrder = require('../controllers/orders/createOrder');
const getOrder = require('../controllers/orders/getOrderById');
const updateOrder = require('../controllers/orders/updateOrder');
const deleteOrder = require('../controllers/orders/deleteOrder');
const getAllOrders = require('../controllers/orders/getAllOrders');

router.post('/add', createOrder);
router.get('/get/:id', getOrder);
router.put('/update/:id', updateOrder);
router.delete('/delete/:id', deleteOrder);
router.get('/', getAllOrders);

module.exports = router;
