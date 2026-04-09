import { Router } from 'express'
import {
  getAllDirectors,
  getDirectorById,
  createDirector
} from '../controllers/director.controller.js'

const directorRouter = Router()

directorRouter.get('/', getAllDirectors)
directorRouter.get('/:id', getDirectorById)
directorRouter.post('/', createDirector)

export default directorRouter