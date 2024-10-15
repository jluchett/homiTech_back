const db = require('../../db/dbconn');

const getAllProducts = async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM products ORDER BY id`);

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

module.exports = getAllProducts;
