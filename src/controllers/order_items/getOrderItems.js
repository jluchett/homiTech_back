const db = require('../../db/dbconn');

const getOrderItems = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM order_items');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los order items' });
    }
};

module.exports = getOrderItems;
