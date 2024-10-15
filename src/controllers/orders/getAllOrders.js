const db = require('../../db/dbconn');

const getAllOrders = async (req, res) => {
  try {
    const query = 'SELECT * FROM orders;';
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes' });
  }
};

module.exports = getAllOrders;
