const express = require('express');
const router = express.Router();

const createPayment = require('../controllers/payments/createPayment');
const getAllPayments = require('../controllers/payments/getAllPayments');
const getPaymentById = require('../controllers/payments/getPaymentById');
const updatePayment = require('../controllers/payments/updatePayment');

router.post('/add', createPayment);
router.get('/', getAllPayments);
router.get('/get/:id', getPaymentById);
router.put('/update/:id', updatePayment);

module.exports = router;