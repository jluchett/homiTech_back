const db = require('../../db/dbconn');

const createShoppingCart = async (req, res) => {
    const { user_id } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO shopping_carts (user_id) VALUES ($1) RETURNING *',
            [user_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al crear el carrito de compras' });
    }
};

module.exports = createShoppingCart;
