import { pool } from '../config/db.js'

export default class Director {
  static getAll = async () => {
    const [rows] = await pool.query(
      `SELECT id, full_name FROM directors ORDER BY id ASC`
    )

    return rows
  }

  static find = async (id) => {
    const [rows] = await pool.query(
        `SELECT id, full_name FROM directors WHERE id = :id`,
        { id }
    )

    return rows
  }
    
  
}