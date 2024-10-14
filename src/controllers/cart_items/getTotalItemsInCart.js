const db = require('../../db/dbconn');

const getTotalItemsInCart = async (req, res) => {
    const { cart_id } = req.params;
    try {
        const totalItems = await db.query(
            'SELECT SUM(quantity) AS total_quantity FROM cart_items WHERE cart_id = $1',
            [cart_id]
        );
        res.json(totalItems.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener el total de productos en el carrito' });
    }
};

module.exports = getTotalItemsInCart;