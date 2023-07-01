import { Router } from "express";
import { check } from "express-validator";

// controllers

import { createUser, getAllUsers, getByIdUser } from "controller/db-controllers/user-controllers/contactInformation";

const router = Router()

router.get('/', getAllUsers)

router.get('/:', getByIdUser)

router.post('/', createUser )

router.put('/:',  )

router.delete('/:', )

export default router;