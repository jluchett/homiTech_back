const db = require('../../db/dbconn');

const getReviewsByProduct = async (req, res) => {
    const { product_id } = req.params;

    try {
        const result = await db.query(
            `SELECT * FROM product_reviews WHERE product_id = $1`,
            [product_id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
};

module.exports = getReviewsByProduct;
