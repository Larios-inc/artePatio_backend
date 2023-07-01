import { Router } from "express";
import { check } from "express-validator";

// controllers

import { createUser, deleteUser, getAllUsers, 
         getByIdUser, updateUser } from "controller/db-controllers/user-controllers/user";

const router = Router()

router.get('/', getAllUsers)

router.get('/:', getByIdUser)

router.post('/', createUser )

router.put('/:', updateUser )

router.delete('/:', deleteUser)

export default router;