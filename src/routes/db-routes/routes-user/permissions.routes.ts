import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createPermissions, deletePermissions,
         getAllPermissions, getByIdPermissions, 
         updatePermissions } from "../../../controller/db-controllers/user-controllers/permissions";

// middlewares
import { validateAreas } from "../../../middlewares/roles/validate";

import { permissionIdExist } from "../../../helpers/usersTests";

const router = Router()

router.get('/', getAllPermissions)

router.get('/:idPermissions',[
    check('idPermissions').custom(permissionIdExist),
    validateAreas
], getByIdPermissions)

router.post('/',[
    check('permission','permission is a must').not().isEmpty(),
    check('permission','must be than 3 characters').isLength({min:3}),
    validateAreas
], createPermissions )

router.put('/:idPermissions', [
    check('idPermissions').custom(permissionIdExist),
    validateAreas
], updatePermissions)

router.delete('/:idPermissions',  [
    check('idPermissions').custom(permissionIdExist),
    validateAreas
],deletePermissions)

export default router;