const db = require('../../db/dbconn');

const deleteOrderItem = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM order_items WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Order item no encontrado' });
        }

        res.status(200).json({ message: 'Order item eliminado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el order item' });
    }
};

module.exports = deleteOrderItem;
