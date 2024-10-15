import express from 'express'
import {getUserData, login} from '../controller/user.controller.js'

const router = express.Router()

router.post("/signup",getUserData)
router.post('/login',login)

export default router
