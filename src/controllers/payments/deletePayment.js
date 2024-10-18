const db = require('../../db/dbconn');

const deletePayment = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM payments WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Pago no encontrado' });
        }

        res.status(200).json({ message: 'Pago eliminado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el pago', details: err.message });
    }
};

module.exports = deletePayment;
