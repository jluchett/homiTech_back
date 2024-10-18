const db = require('../../db/dbconn');

const getAllShipments = async(req, res) => {
    const sqlSelect = "SELECT * FROM shipments ORDER BY id";
    try {
        const result = await db.query(sqlSelect);
        if(result.rows.length === 0){
            return res.status(404).json({ status: "No se encontraron datos"})
        }
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message})        
    }
}

module.exports = getAllShipments;