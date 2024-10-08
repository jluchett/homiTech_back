const db = require('../../db/dbconn');

const getAllCategories = async (req, res) => {
  try {
      const result = await db.query('SELECT * FROM categories ORDER BY created_at DESC');
      res.status(200).json(result.rows);
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error fetching categories' });
  }
};

module.exports = getAllCategories;