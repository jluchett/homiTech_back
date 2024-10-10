const db = require('../../db/dbconn');

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(`DELETE FROM products WHERE id = $1 RETURNING *`, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};

module.exports = deleteProduct;
