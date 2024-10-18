const db = require('../../db/dbconn');

const createReview = async (req, res) => {
    const { product_id, user_id, rating, review } = req.body;

    try {
        const result = await db.query(
            `INSERT INTO product_reviews (product_id, user_id, rating, review) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [product_id, user_id, rating, review]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error creating review' });
    }
};

module.exports = createReview;
