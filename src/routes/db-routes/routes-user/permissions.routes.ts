import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createPermissions, deletePermissions, getAllPermissions, 
         getByIdPermissions, updatePermissions } from "controller/db-controllers/user-controllers/permissions";

const router = Router()

router.get('/', getAllPermissions)

router.get('/:', getByIdPermissions)

router.post('/', createPermissions )

router.put('/:', updatePermissions )

router.delete('/:', deletePermissions)

export default router;