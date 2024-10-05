const db = require('../../db/dbconn');
const bcrypt = require('bcrypt');

const addUser = async(req, res) => {
  const { username, email, password} = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const sqlInsert = "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *";
  const values = [username, email, hashPassword];

  try {
    const userAdded = await db.query(sqlInsert, values);
    if (userAdded){
      res.status(200).json({"Usuario agregado:": userAdded.rows});
    }
    
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = addUser;
