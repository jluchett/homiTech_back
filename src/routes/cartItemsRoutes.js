const express = require('express');
const router = express.Router();

const createCartItem = require('../controllers/cart_items/createCartItem');
const getCartItems = require('../controllers/cart_items/getCartItems');
const updateCartItem = require('../controllers/cart_items/updateCartItem');
const deleteCartItem = require('../controllers/cart_items/deleteCartItem');
const getTotalItemsInCart = require('../controllers/cart_items/getTotalItemsInCart');
const getTotalValueInCart = require('../controllers/cart_items/getTotalValueInCart');

// CRUD operations
router.post('/add', createCartItem);
router.get('/get/:cart_id', getCartItems);
router.put('/update/:id', updateCartItem);
router.delete('/delete/:id', deleteCartItem);

// Additional operations
router.get('/get/:cart_id/total-items', getTotalItemsInCart);
router.get('/get/:cart_id/total-value', getTotalValueInCart);

module.exports = router;
