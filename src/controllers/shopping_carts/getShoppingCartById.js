// controllers/getShoppingCartById.js
const db = require('../../db/dbconn');

const getShoppingCartById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            'SELECT * FROM shopping_carts WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Carrito de compras no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener el carrito de compras' });
    }
};

module.exports = getShoppingCartById;
