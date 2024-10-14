const db = require('../../db/dbconn');

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const updatedCartItem = await db.query(
            'UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *',
            [quantity, id]
        );
        res.json(updatedCartItem.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el item en el carrito' });
    }
};

module.exports = updateCartItem;