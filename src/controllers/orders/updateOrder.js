const db = require('../../db/dbconn');

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const query = `
      UPDATE orders 
      SET status = $1, updated_at = CURRENT_TIMESTAMP 
      WHERE id = $2 
      RETURNING *;
    `;
    const result = await db.query(query, [status, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar la orden:', error);
    res.status(500).json({ error: 'Error al actualizar la orden' });
  }
};

module.exports = updateOrder;
