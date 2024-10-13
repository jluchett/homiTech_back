const db = require('../../db/dbconn');

const updateShippingAddress = async (req, res) => {
    const { id } = req.params;
    const { address_line_1, address_line_2, city, state, postal_code, country } = req.body;
    
    try {
        const result = await db.query(
            `UPDATE shipping_addresses
            SET address_line_1 = $1, address_line_2 = $2, city = $3, state = $4, postal_code = $5, country = $6, updated_at = CURRENT_TIMESTAMP
            WHERE id = $7
            RETURNING *`,
            [address_line_1, address_line_2, city, state, postal_code, country, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dirección no encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la dirección de envío' });
    }
};

module.exports = updateShippingAddress;
