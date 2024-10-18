const db = require('../../db/dbconn');

const deleteInventoryLog = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(`DELETE FROM inventory_logs WHERE id = $1 RETURNING *`, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Log de inventario no encontrado' });
        }
        res.status(200).json({ message: 'Log de inventario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el log de inventario', error });
    }
};

module.exports = deleteInventoryLog;