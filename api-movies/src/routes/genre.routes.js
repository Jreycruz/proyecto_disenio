import { Router } from 'express'
import { getAllGenres, getGenreById, createGenre, updateGenre } from '../controllers/genre.controller.js'

const genreRouter = Router()

genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)
genreRouter.post('/', createGenre)
genreRouter.put('/:id', updateGenre)

export default genreRouter