const db = require('../../db/dbconn');

const getTotalValueInCart = async (req, res) => {
    const { cart_id } = req.params;
    try {
        const totalValue = await db.query(
            `SELECT SUM(ci.quantity * p.price) AS total_value
            FROM cart_items ci
            JOIN products p ON ci.product_id = p.id
            WHERE ci.cart_id = $1`,
            [cart_id]
        );
        res.json(totalValue.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener el valor total de productos en el carrito' });
    }
};

module.exports = getTotalValueInCart;