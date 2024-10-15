const db = require('../../db/dbconn');

const createOrder = async (req, res) => {
  const { user_id, shipping_address_id, total, status } = req.body;

  try {
    const query = `
      INSERT INTO orders (user_id, shipping_address_id, total, status) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [user_id, shipping_address_id, total, status || 'pendiente'];
    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear la orden:', error);
    res.status(500).json({ error: 'Error al crear la orden' });
  }
};

module.exports = createOrder;
