const db = require('../../db/dbconn')

const getUserById = async(req, res) =>{
  const { id } = req.params;
  const sqlSelect = "SELECT * FROM users WHERE id = $1";
  
  try {
    const user = await db.query(sqlSelect,[id]);

    if(user.rowCount){
      res.status(200).json(user.rows)
    }else{
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getUserById;