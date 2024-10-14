const db = require('../../db/dbconn');

const createCartItem = async (req, res) => {
    const { cart_id, product_id, quantity } = req.body;
    try {
        const newCartItem = await db.query(
            'INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
            [cart_id, product_id, quantity]
        );
        res.json(newCartItem.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el item en el carrito' });
    }
};

module.exports = createCartItem;