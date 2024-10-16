const db = require('../../db/dbconn');

const createOrderItem = async (req, res) => {
    const { order_id, product_id, quantity, price } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *',
            [order_id, product_id, quantity, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el order item' });
    }
};

module.exports = createOrderItem;
