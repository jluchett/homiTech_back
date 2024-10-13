const db = require('../../db/dbconn');

const getAllShippingAddress = async(req, res) => {
  const sqlSelect = "SELECT * FROM shipping_addresses ORDER BY user_id";
  try {
    const result = await db.query(sqlSelect);
    if(result.rowCount > 0){
      res.status(201).json(result.rows)
    }else{
      res.status(400).json({respuesta: "No hay datos en la consulta"})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getAllShippingAddress;