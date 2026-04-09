import { Router } from 'express'
import { getAllDirectors, getDirectorById } from '../controllers/director.controller.js'

const directorRouter = Router()

directorRouter.get('/', getAllDirectors)
directorRouter.get('/:id', getDirectorById)

export default directorRouter