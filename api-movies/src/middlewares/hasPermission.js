
import Permission from "../service/permission.js"

export const hasPermission = async (req, res, next) => {

    try {
        // llamar al servicio 
        req.permissions = await Permission.permissions(req.rol)
        next()
    } catch {
        return res.json({
            status: 'error',
            "message": "acceso denegado"
        })
    }



}