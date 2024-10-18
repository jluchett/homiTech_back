const express = require('express');
const router = express.Router();

const createOrderItem = require('../controllers/order_items/createOrderItem');
const getOrderItems = require('../controllers/order_items/getOrderItems');
const getOrderItemById = require('../controllers/order_items/getOrderItemById');
const updateOrderItem = require('../controllers/order_items/updateOrderItem');
const deleteOrderItem = require('../controllers/order_items/deleteOrderItem');

// Crear un nuevo order item
router.post('/add', createOrderItem);

// Obtener todos los order items
router.get('/', getOrderItems);

// Obtener un order item por id
router.get('/get/:id', getOrderItemById);

// Actualizar un order item por id
router.put('/update/:id', updateOrderItem);

// Eliminar un order item por id
router.delete('/delete/:id', deleteOrderItem);

module.exports = router;
