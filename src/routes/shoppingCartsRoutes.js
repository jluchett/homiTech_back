const express = require('express');
const router = express.Router();

const createShoppingCart = require('../controllers/shopping_carts/createShoppingCart');
const getAllShoppingCarts = require('../controllers/shopping_carts/getAllShoppingCarts');
const getShoppingCartById = require('../controllers/shopping_carts/getShoppingCartById');
const updateShoppingCart = require('../controllers/shopping_carts/updateShoppingCart');
const deleteShoppingCart = require('../controllers/shopping_carts/deleteShoppingCart');

router.post('/add', createShoppingCart);
router.get('/', getAllShoppingCarts);
router.get('/get/:id', getShoppingCartById);
router.put('/update/:id', updateShoppingCart);
router.delete('/delete/:id', deleteShoppingCart);

module.exports = router;