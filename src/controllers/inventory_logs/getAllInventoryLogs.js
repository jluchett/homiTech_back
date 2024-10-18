const db = require('../../db/dbconn');

const getAllInventoryLogs = async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM inventory_logs ORDER BY change_date DESC`);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los logs de inventario', error });
    }
};

module.exports = getAllInventoryLogs;