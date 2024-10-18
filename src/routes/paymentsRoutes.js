const express = require('express');
const router = express.Router();

const createPayment = require('../controllers/payments/createPayment');
const getAllPayments = require('../controllers/payments/getAllPayments');

router.post('/add', createPayment);
router.get('/', getAllPayments);

module.exports = router;