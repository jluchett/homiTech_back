const db = require('../../db/dbconn');

const createShippingAddress = async (req, res) => {
    const { user_id, address_line_1, address_line_2, city, state, postal_code, country } = req.body;
    
    try {
        const result = await db.query(
            `INSERT INTO shipping_addresses (user_id, address_line_1, address_line_2, city, state, postal_code, country)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [user_id, address_line_1, address_line_2, city, state, postal_code, country]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la dirección de envío' });
    }
};

module.exports = createShippingAddress;
