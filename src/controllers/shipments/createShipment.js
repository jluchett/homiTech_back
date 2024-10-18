const db = require('../../db/dbconn'); 

const createShipment = async (req, res) => {
    const { order_id, tracking_number, carrier, shipped_date, delivered_date } = req.body;

    try {
        const result = await db.query(
            `INSERT INTO shipments (order_id, tracking_number, carrier, shipped_date, delivered_date)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [order_id, tracking_number, carrier, shipped_date, delivered_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el envío' });
    }
};

module.exports =  createShipment ;
