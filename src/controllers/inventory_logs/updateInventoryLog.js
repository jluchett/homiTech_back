const db = require('../../db/dbconn');

const getInventoryLogById = async (req, res) => {
    const { id } = req.params;
    const { product_id, change_type, quantity } = req.body;

    try {
        const result = await db.query(
            `UPDATE inventory_logs 
             SET product_id = $1, change_type = $2, quantity = $3 
             WHERE id = $4 RETURNING *`,
            [product_id, change_type, quantity, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Log de inventario no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el log de inventario', error });
    }
};

module.exports = getInventoryLogById;