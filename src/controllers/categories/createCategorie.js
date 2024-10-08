const db = require('../../db/dbconn');

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
      const result = await db.query(
          'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *',
          [name, description]
      );
      res.status(201).json(result.rows[0]);
  } catch (err) {
      if (err.code === '23505') { // Error de llave única
          return res.status(400).json({ error: 'Category name already exists' });
      }
      console.error(err.message);
      res.status(500).json({ error: 'Error creating category' });
  }
};

module.exports = createCategory;
