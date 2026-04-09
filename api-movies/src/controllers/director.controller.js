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

export const getDirectorById = async (req, res) => {
  const { id } = req.params

  if (isNaN(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'El id debe ser numérico',
      data: null
    })
  }

  try {
    const director = await Director.find(id)

    if (!director.length) {
      return res.status(404).json({
        status: 'error',
        message: 'Director no encontrado',
        data: null
      })
    }

    return res.json({
      status: 'success',
      message: 'Obtener director por id',
      data: director[0]
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener el director: ' + e.message,
      data: null
    })
  }
}