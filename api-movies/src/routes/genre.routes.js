import { Router } from 'express'
import {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
} from '../controllers/genre.controller.js'

const genreRouter = Router()

genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)
genreRouter.post('/', createGenre)
genreRouter.put('/:id', updateGenre)
genreRouter.delete('/:id', deleteGenre)

export default genreRouter