const db = require('../../db/dbconn');

const createProduct = async (req, res) => {
    const { name, description, price, stock_quantity, category_id, image_url } = req.body;
    
    try {
        const result = await db.query(
            `INSERT INTO products (name, description, price, stock_quantity, category_id, image_url)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [name, description, price, stock_quantity, category_id, image_url]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

module.exports = createProduct;
