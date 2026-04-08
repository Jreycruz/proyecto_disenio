
import { pool } from '../config/db.js'

export default class Permission {



    // permission_id, rol_id, name
    // 1,1,'movie.create'
    // 2,1,'movie.update'
    // 3,1,'movie.delete'
    // 4,1,'movie.show'


    static permissions = async ({ rol }) => {

        const [rows] = await pool.query(` select name FROM permission where rol = :rol `, { rol })

        return rows // [movie.create, movie.update, movie.delete, movie.show]


    }

}