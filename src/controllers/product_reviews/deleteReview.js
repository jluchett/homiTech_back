const db = require('../../db/dbconn');

const deleteReview = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            `DELETE FROM product_reviews WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting review' });
    }
};

module.exports = deleteReview;
