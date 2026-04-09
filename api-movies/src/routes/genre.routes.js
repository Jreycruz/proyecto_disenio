import { Router } from 'express'
import { getAllGenres, getGenreById, createGenre } from '../controllers/genre.controller.js'

const genreRouter = Router()

genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)
genreRouter.post('/', createGenre)

export default genreRouter