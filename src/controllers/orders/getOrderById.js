const db = require('../../db/dbconn');

const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'SELECT * FROM orders WHERE id = $1';
    const result = await db.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    res.status(500).json({ error: 'Error al obtener la orden' });
  }
};

module.exports = getOrderById;
