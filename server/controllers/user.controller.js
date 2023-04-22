const db = require('../db')

class UserContoller {
  async createUser(req, res) {
    const { name, number } = req.body
    const newUser = await db.query(`INSERT INTO name_and_num (user_name, user_number) values ($1, $2) RETURNING *`, [name, number])
    res.json(newUser.rows[0])
  }
  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM name_and_num')
    res.json(users.rows)
  }
  async updateUser(req, res) {
    const { id, name, number } = req.body
    const updatedUser = await db.query(`UPDATE name_and_num SET user_name = $1, user_number = $2 WHERE id = $3 RETURNING *`, [name, number, id])
    res.json(updatedUser.rows[0])
  }
  async deleteAllUsers(req, res) {
    const deletedUsers = db.query(`DELETE FROM name_and_num`)
    res.json(deletedUsers.rows)
  }
  async deleteUser(req, res) {
    const userId = req.params.userId
    const deletedUser = await db.query(`DELETE FROM name_and_num WHERE id = $1`, [userId])
    res.json(deletedUser.rows[0])
  }
}

module.exports = new UserContoller()