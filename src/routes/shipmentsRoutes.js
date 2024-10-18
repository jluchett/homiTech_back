const express = require('express');
const router = express.Router();

const createShipment = require('../controllers/shipments/createShipment');
const getShipmentById = require('../controllers/shipments/getShipmentById');
const updateShipment = require('../controllers/shipments/updateShipment');
const deleteShipment = require('../controllers/shipments/deleteShipment');
const getAllShipments = require('../controllers/shipments/getAllShipments');

// Crear un nuevo envío
router.post('/add', createShipment);

// Obtener un envío por ID
router.get('/get/:id', getShipmentById);

// Actualizar un envío por ID
router.put('/update/:id', updateShipment);

// Eliminar un envío por ID
router.delete('/:id', deleteShipment);

router.get('/', getAllShipments);

module.exports = router;
