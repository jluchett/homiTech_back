const db = require('../../db/dbconn');

const getShippingAddressById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const result = await db.query(`SELECT * FROM shipping_addresses WHERE id = $1`, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dirección no encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la dirección de envío' });
    }
};

module.exports = getShippingAddressById;
