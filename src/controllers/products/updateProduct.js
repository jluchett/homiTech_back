const db = require('../../db/dbconn');

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock_quantity, category_id, image_url } = req.body;

    try {
        const result = await db.query(
            `UPDATE products
            SET name = $1, description = $2, price = $3, stock_quantity = $4, category_id = $5, image_url = $6, updated_at = CURRENT_TIMESTAMP
            WHERE id = $7
            RETURNING *`,
            [name, description, price, stock_quantity, category_id, image_url, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

module.exports = updateProduct;
