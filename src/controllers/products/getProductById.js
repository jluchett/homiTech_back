const db = require('../../db/dbconn');

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(`SELECT * FROM products WHERE id = $1`, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

module.exports = getProductById;
