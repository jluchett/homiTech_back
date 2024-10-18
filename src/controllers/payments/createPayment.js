const db = require('../../db/dbconn'); // Conexión a la base de datos

const createPayment = async (req, res) => {
    const { order_id, amount, payment_method, payment_status, payment_date } = req.body;
    
    try {
        const result = await db.query(
            `INSERT INTO payments (order_id, amount, payment_method, payment_status, payment_date)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [order_id, amount, payment_method, payment_status || 'pendiente', payment_date]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el pago', details: err.message });
    }
};

module.exports = createPayment;