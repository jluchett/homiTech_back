const db = require('../../db/dbconn');

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, first_name, last_name, phone_number } = req.body;

  const sqlUpdate = `
    UPDATE users 
    SET username = $1, email = $2, first_name = $3, last_name = $4, phone_number = $5, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $6 
    RETURNING *`;
  const values = [username, email, first_name, last_name, phone_number, id];

  try {
    const result = await db.query(sqlUpdate, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ status: "Usuario actualizado", datos: result.rows[0] });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = updateUser;
