const db = require('../../db/dbconn');

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
      const result = await db.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Category no se encuentra' });
      }
      res.status(200).json({ message: 'Categoria eleiminada con exito' });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error al eliminar categoria' });
  }
};

module.exports = deleteCategory;