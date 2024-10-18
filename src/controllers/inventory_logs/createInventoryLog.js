const db = require('../../db/dbconn');

const createInventoryLog = async (req, res) => {
    const { product_id, change_type, quantity } = req.body;

    try {
        const result = await db.query(
            `INSERT INTO inventory_logs (product_id, change_type, quantity) 
             VALUES ($1, $2, $3) RETURNING *`,
            [product_id, change_type, quantity]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el log de inventario', error });
    }
};

module.exports = createInventoryLog;