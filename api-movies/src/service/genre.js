import { pool } from '../config/db.js'

export default class Genre {
  static getAll = async () => {
    const [rows] = await pool.query(
      `SELECT id, name FROM genres ORDER BY id ASC`
    )

    return rows
  }

  static find = async (id) => {
    const [rows] = await pool.query(
        `SELECT id, name FROM genres WHERE id = :id`,
        { id }
    )

    return rows
  }

  static create = async ({ input }) => {
    const [result] = await pool.query(
        `
        INSERT INTO genres (name)
        VALUES (:name)
        `,
        {
            name: input.name
        }
    )

    const [rows] = await pool.query(
        `SELECT id, name FROM genres WHERE id = :id`,
        { id: result.insertId }
    )

    return rows[0]

  }
    
  static update = async ({ id, input }) => {
    await pool.query(
        `
        UPDATE genres
        SET name = :name
        WHERE id = :id
        `,
        {
            id,
            name: input.name
        }
    )

    const [rows] = await pool.query(
        `SELECT id, name FROM genres WHERE id = :id`,
        { id }
    )

    return rows[0]
  }
    
  
}

