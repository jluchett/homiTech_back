// controllers/updateShoppingCart.js
const db = require('../../db/dbconn');

const updateShoppingCart = async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;

    try {
        const result = await db.query(
            'UPDATE shopping_carts SET user_id = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
            [user_id, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrito de compras no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al actualizar el carrito de compras' });
    }
};

module.exports = updateShoppingCart;
