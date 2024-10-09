const db = require('../../db/dbconn');

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
      const result = await db.query(
          'UPDATE categories SET name = $1, description = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
          [name, description, id]
      );
      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Categoria no se encontro' });
      }
      res.status(200).json(result.rows[0]);
  } catch (err) {
      if (err.code === '23505') { // Error de llave única
          return res.status(400).json({ error: 'Categoria ya existe' });
      }
      console.error(err.message);
      res.status(500).json({ error: 'Error al actualizar categoria' });
  }
};

module.exports = updateCategory;