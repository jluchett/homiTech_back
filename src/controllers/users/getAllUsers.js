const db = require('../../db/dbconn');

const getAllUsers = async(req, res) =>{
    const sqlSelect = "SELECT * FROM users ORDER BY id";
    try {
        const AllUsers = await db.query(sqlSelect);
        if(AllUsers){
            res.status(200).json(AllUsers.rows)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = getAllUsers;