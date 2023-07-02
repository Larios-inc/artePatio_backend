import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createPermissions, deletePermissions,
         getAllPermissions, getByIdPermissions, 
         updatePermissions } from "../../../controller/db-controllers/user-controllers/permissions";

// middlewares
import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllPermissions)

router.get('/:idPermissions', getByIdPermissions)

router.post('/',[
    check('permission','permission is a must').not().isEmpty(),
    check('permission','must be than 3 characters').isLength({min:3}),
    validateAreas
], createPermissions )

router.put('/:idPermissions', updatePermissions )

router.delete('/:idPermissions', deletePermissions)

export default router;