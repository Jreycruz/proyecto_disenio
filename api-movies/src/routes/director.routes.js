import { Router } from 'express'
import { getAllDirectors } from '../controllers/director.controller.js'

const directorRouter = Router()

directorRouter.get('/', getAllDirectors)

export default directorRouter