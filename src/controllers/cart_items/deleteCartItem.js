const db = require('../../db/dbconn');

const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM cart_items WHERE id = $1', [id]);
        res.json({ message: 'Item eliminado del carrito' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el item del carrito' });
    }
};

module.exports = deleteCartItem;