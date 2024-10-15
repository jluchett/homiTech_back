const db = require('../../db/dbconn');

const getCartItems = async (req, res) => {
    const { cart_id } = req.params;
    try {
        const cartItems = await db.query(
            'SELECT * FROM cart_items WHERE cart_id = $1',
            [cart_id]
        );
        if(cartItems.rows.length === 0){
           return res.status(404).json({status: "No hay items en el carrito"});
        };
        res.json(cartItems.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los items del carrito' });
    }
};

module.exports = getCartItems;
