const db = require('../../db/dbconn'); 

const updateShipment = async (req, res) => {
    const { id } = req.params;
    const { shipment_status, tracking_number, carrier, shipped_date, delivered_date } = req.body;

    try {
        const result = await db.query(
            `UPDATE shipments 
            SET shipment_status = $1, tracking_number = $2, carrier = $3, shipped_date = $4, delivered_date = $5
            WHERE id = $6 RETURNING *`,
            [shipment_status, tracking_number, carrier, shipped_date, delivered_date, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Envío no encontrado' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el envío' });
    }
};

module.exports =  updateShipment;
