import Director from '../service/director.js'

export const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.getAll()

    return res.json({
      status: 'success',
      message: 'Obtener todos los directores',
      data: directors
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener los directores: ' + e.message,
      data: null
    })
  }
}