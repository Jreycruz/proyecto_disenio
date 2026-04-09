import Genre from '../service/genre.js'

export const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.getAll()

    return res.json({
      status: 'success',
      message: 'Obtener todos los géneros',
      data: genres
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener los géneros: ' + e.message,
      data: null
    })
  }
}

export const getGenreById = async (req, res) => {
  const { id } = req.params

  if (isNaN(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'El id debe ser numérico',
      data: null
    })
  }

  try {
    const genre = await Genre.find(id)

    if (!genre.length) {
      return res.status(404).json({
        status: 'error',
        message: 'Género no encontrado',
        data: null
      })
    }

    return res.json({
      status: 'success',
      message: 'Obtener género por id',
      data: genre[0]
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener el género: ' + e.message,
      data: null
    })
  }
}

export const createGenre = async (req, res) => {
  const { name } = req.body

  if (!name || typeof name !== 'string') {
    return res.status(400).json({
      status: 'error',
      message: 'El nombre es obligatorio',
      data: null
    })
  }

  try {
    const newGenre = await Genre.create({
      input: { name }
    })

    return res.status(201).json({
      status: 'success',
      message: 'Género creado correctamente',
      data: newGenre
    })
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: 'Error al crear el género: ' + e.message,
      data: null
    })
  }
}