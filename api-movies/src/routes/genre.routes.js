import { Router } from 'express'
import { getAllGenres } from '../controllers/genre.controller.js'

const genreRouter = Router()

genreRouter.get('/', getAllGenres)

export default genreRouter