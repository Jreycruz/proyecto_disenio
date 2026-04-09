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