const express = require('express');
const router = express.Router();

const createInventoryLog = require('../controllers/inventory_logs/createInventoryLog');
const getAllInventoryLogs = require('../controllers/inventory_logs/getAllInventoryLogs');
const updateInventoryLog = require('../controllers/inventory_logs/updateInventoryLog');
const deleteInventoryLog = require('../controllers/inventory_logs/deleteInventoryLog');
const getInventoryLogById = require('../controllers/inventory_logs/getInventoryLogById');

router.post('/add', createInventoryLog);
router.get('/', getAllInventoryLogs);
router.get('/:id', getInventoryLogById);
router.put('/update/:id', updateInventoryLog);
router.delete('/delete/:id', deleteInventoryLog);

module.exports = router;
