const db = require('../../db/dbconn');

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'DELETE FROM orders WHERE id = $1 RETURNING *;';
    const result = await db.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.json({ message: 'Orden eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la orden:', error);
    res.status(500).json({ error: 'Error al eliminar la orden' });
  }
};

module.exports = deleteOrder;
