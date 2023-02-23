import {Router} from 'express'
const router = Router()

import * as authCtrl from "../controllers/auth.controller.js"

router.post('/signup',authCtrl.signUp)
router.post('/signIn',authCtrl.signIn)

export default router