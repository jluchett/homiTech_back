const db = require('../../db/dbconn');

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
      const result = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'No se encuentra categoria' });
      }
      res.status(200).json(result.rows[0]);
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error obteniendo categoria' });
  }
};

module.exports = getCategoryById;
