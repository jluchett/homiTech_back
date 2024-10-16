const db = require('../../db/dbconn');

const updateOrderItem = async (req, res) => {
    const { id } = req.params;
    const { quantity, price } = req.body;

    try {
        const result = await db.query(
            'UPDATE order_items SET quantity = $1, price = $2 WHERE id = $3 RETURNING *',
            [quantity, price, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Order item no encontrado' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el order item' });
    }
};

module.exports = updateOrderItem;
