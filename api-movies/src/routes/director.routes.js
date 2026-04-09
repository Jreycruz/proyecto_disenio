import { Router } from 'express'
import {
  getAllDirectors,
  getDirectorById,
  createDirector,
  updateDirector
} from '../controllers/director.controller.js'

const directorRouter = Router()

directorRouter.get('/', getAllDirectors)
directorRouter.get('/:id', getDirectorById)
directorRouter.post('/', createDirector)
directorRouter.put('/:id', updateDirector)

export default directorRouter