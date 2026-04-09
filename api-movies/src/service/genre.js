import { pool } from '../config/db.js'

export default class Genre {
  static getAll = async () => {
    const [rows] = await pool.query(
      `SELECT id, name FROM genres ORDER BY id ASC`
    )

    return rows
  }
}