const db = require('../../db/dbconn');

const deleteShippingAddress = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(`DELETE FROM shipping_addresses WHERE id = $1 RETURNING *`, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dirección no encontrada' });
        }

        res.json({ message: 'Dirección eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la dirección de envío' });
    }
};

module.exports = deleteShippingAddress;
