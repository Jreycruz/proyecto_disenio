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
    
  static create = async ({ input }) => {
    const [result] = await pool.query(
        `
        INSERT INTO directors (full_name)
        VALUES (:full_name)
        `,
        {
            full_name: input.full_name
        }
    )

    const [rows] = await pool.query(
        `SELECT id, full_name FROM directors WHERE id = :id`,
        { id: result.insertId }
    )

    return rows[0]
  }
    
  static update = async ({ id, input }) => {
      await pool.query(
        `
        UPDATE directors
        SET full_name = :full_name
        WHERE id = :id
        `,
        {
        id,
        full_name: input.full_name
        }
    )

    const [rows] = await pool.query(
        `SELECT id, full_name FROM directors WHERE id = :id`,
        { id }
    )

    return rows[0]
  }
  
  static delete = async ({ id }) => {
      const [result] = await pool.query(
        `DELETE FROM directors WHERE id = :id`,
        { id }
    )

    return result
  }
  
}