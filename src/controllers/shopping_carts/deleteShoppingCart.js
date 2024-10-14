// controllers/deleteShoppingCart.js
const db = require('../../db/dbconn');

const deleteShoppingCart = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            'DELETE FROM shopping_carts WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrito de compras no encontrado' });
        }

        res.json({ message: 'Carrito de compras eliminado' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al eliminar el carrito de compras' });
    }
};

module.exports = deleteShoppingCart;
