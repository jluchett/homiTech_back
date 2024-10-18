const db = require('../../db/dbconn'); 

const deleteShipment = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM shipments WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Envío no encontrado' });
        }

        res.status(200).json({ message: 'Envío eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el envío' });
    }
};

module.exports = deleteShipment;
