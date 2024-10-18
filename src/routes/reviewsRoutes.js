const express = require('express');

const createReview = require('../controllers/product_reviews/createReview');
const getReviewsByProduct = require('../controllers/product_reviews/getReviewsByProduct');
const updateReview = require('../controllers/product_reviews/updateReview');
const deleteReview = require('../controllers/product_reviews/deleteReview');

const router = express.Router();

// Ruta para crear una nueva reseña
router.post('/add', createReview);

// Ruta para obtener todas las reseñas de un producto
router.get('/get/:product_id', getReviewsByProduct);

// Ruta para actualizar una reseña
router.put('/update/:id', updateReview);

// Ruta para eliminar una reseña
router.delete('/delete/:id', deleteReview);

module.exports = router;
