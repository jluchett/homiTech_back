const db = require('../../db/dbconn');

const getShippingAddressesByUserId = async (req, res) => {
    const { user_id } = req.params;

    try {
        const result = await db.query(`SELECT * FROM shipping_addresses WHERE user_id = $1`, [user_id]);

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las direcciones de envío' });
    }
};

module.exports = getShippingAddressesByUserId;
