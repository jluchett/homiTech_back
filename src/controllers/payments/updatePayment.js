const db = require('../../db/dbconn');

const updatePayment = async (req, res) => {
  const { id } = req.params;
  const { amount, payment_method, payment_status, payment_date } = req.body;

  try {
      const result = await db.query(
          `UPDATE payments 
           SET amount = $1, payment_method = $2, payment_status = $3, payment_date = $4, updated_at = CURRENT_TIMESTAMP
           WHERE id = $5 RETURNING *`,
          [amount, payment_method, payment_status, payment_date, id]
      );

      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Pago no encontrado' });
      }

      res.status(200).json(result.rows[0]);
  } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el pago', details: err.message });
  }
};

module.exports = updatePayment;
