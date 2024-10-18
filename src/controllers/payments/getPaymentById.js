const db = require('../../db/dbconn'); 

const getPaymentById = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await db.query('SELECT * FROM payments WHERE id = $1', [id]);

      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Pago no encontrado' });
      }

      res.status(200).json(result.rows[0]);
  } catch (err) {
      res.status(500).json({ error: 'Error al obtener el pago', details: err.message });
  }
};

module.exports = getPaymentById;