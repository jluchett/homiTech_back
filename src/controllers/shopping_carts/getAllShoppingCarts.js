// controllers/getAllShoppingCarts.js
const db = require('../../db/dbconn');

const getAllShoppingCarts = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM shopping_carts');
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener los carritos de compras' });
    }
};

module.exports = getAllShoppingCarts;
