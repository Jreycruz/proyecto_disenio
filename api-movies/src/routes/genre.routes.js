import { Router } from 'express'
import { getAllGenres, getGenreById } from '../controllers/genre.controller.js'

const genreRouter = Router()

genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)

export default genreRouter