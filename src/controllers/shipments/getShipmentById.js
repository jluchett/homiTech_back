const db = require('../../db/dbconn'); 

const getShipmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query('SELECT * FROM shipments WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Envío no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el envío' });
    }
};

module.exports =  getShipmentById;
