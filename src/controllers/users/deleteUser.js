const db = require('../../db/dbconn');

const deleteUser = async(req, res) => {
  const { id } = req.params;
  const sqlDelete = "DELETE FROM users WHERE id = $1 RETURNING *";

  try {
    const result = await db.query(sqlDelete, [id]);
    if(result.rows.length === 0){
      return res.status(404).json({message: "Error al eliminar usuario"})
    }
    res.status(200).json({message: "Usuario eliminado con exito"})
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "Error del servidor", error: error.message})
  }
}

module.exports = deleteUser;