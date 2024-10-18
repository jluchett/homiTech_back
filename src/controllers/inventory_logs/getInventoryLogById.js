const db = require('../../db/dbconn');

const getInventoryLogById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(`SELECT * FROM inventory_logs WHERE id = $1`, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Log de inventario no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el log de inventario', error });
    }
};

module.exports = getInventoryLogById;