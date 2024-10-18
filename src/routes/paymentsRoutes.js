const express = require('express');
const router = express.Router();

const createPayment = require('../controllers/payments/createPayment');

router.post('/add', createPayment);

module.exports = router;