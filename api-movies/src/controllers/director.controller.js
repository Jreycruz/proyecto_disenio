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

export const createDirector = async (req, res) => {
  const { full_name } = req.body

  if (!full_name || typeof full_name !== 'string') {
    return res.status(400).json({
      status: 'error',
      message: 'El nombre completo es obligatorio',
      data: null
    })
  }

  try {
    const newDirector = await Director.create({
      input: { full_name }
    })

    return res.status(201).json({
      status: 'success',
      message: 'Director creado correctamente',
      data: newDirector
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al crear el director: ' + e.message,
      data: null
    })
  }
}

export const updateDirector = async (req, res) => {
  const { id } = req.params
  const { full_name } = req.body

  if (isNaN(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'El id debe ser numérico',
      data: null
    })
  }

  if (!full_name || typeof full_name !== 'string') {
    return res.status(400).json({
      status: 'error',
      message: 'El nombre completo es obligatorio',
      data: null
    })
  }

  try {
    const directorFound = await Director.find(id)

    if (!directorFound.length) {
      return res.status(404).json({
        status: 'error',
        message: 'Director no encontrado',
        data: null
      })
    }

    const updatedDirector = await Director.update({
      id,
      input: { full_name }
    })

    return res.json({
      status: 'success',
      message: 'Director actualizado correctamente',
      data: updatedDirector
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al actualizar el director: ' + e.message,
      data: null
    })
  }
}