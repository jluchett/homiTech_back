const db = require('../../db/dbconn'); 

const getAllPayments = async (req, res) => {
  try {
      const result = await db.query('SELECT * FROM payments ORDER BY created_at DESC');
      res.status(200).json(result.rows);
  } catch (err) {
      res.status(500).json({ error: 'Error al obtener los pagos', details: err.message });
  }
};

module.exports = getAllPayments;