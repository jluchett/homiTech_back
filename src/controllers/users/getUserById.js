const db = require('../../db/dbconn')

const getUserById = async(req, res) =>{
  const { id } = req.params;
  const sqlSelect = "SELECT * FROM users WHERE id = $1";
  
  try {
    const user = await db.query(sqlSelect,[id]);

    if(user){
      res.status(200).json(user.rows)
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getUserById;