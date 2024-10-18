const db = require('../../db/dbconn');

const updateReview = async (req, res) => {
    const { id } = req.params;
    const { rating, review } = req.body;

    try {
        const result = await db.query(
            `UPDATE product_reviews SET rating = $1, review = $2 WHERE id = $3 RETURNING *`,
            [rating, review, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error updating review' });
    }
};

module.exports = updateReview;
