import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createRole, deleteRole, 
         getAllRole, getByIdRole, 
         updateRole } from "../../../controller/db-controllers/user-controllers/Role";

// helpers         
import { permissionIdExist, 
        roleIdExist, 
        testRoleIfExist } from "../../../helpers/usersTests";

// middlewares
import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllRole)

router.get('/:idRole', [
    check('idRole').custom( roleIdExist),
    validateAreas
], getByIdRole)

router.post('/', [
    check('role_Name','Role Name is a must').not().isEmpty(),
    check('role_Name','Must be more than 3 characters').isLength({min:4}),
    check('role_Name').custom(testRoleIfExist),
    check('permissionsId','Permission is a must select it ASAP').not().isEmpty(),
    check('permissionsId').custom(permissionIdExist),
    validateAreas
], createRole)

router.put('/:idRole', [
    check('role_Name','Role Name is a must').not().isEmpty(),
    check('role_Name','Must be more than 3 characters').isLength({min:4}),
    check('idRole').custom( roleIdExist),
    check('role_Name').custom(testRoleIfExist),
    check('permissionsId','Permission is a must select it ASAP').not().isEmpty(),
    check('permissionsId').custom(permissionIdExist),
    validateAreas
],updateRole )

router.delete('/:idRole', [
    check('idRole').custom( roleIdExist),
    validateAreas
],deleteRole )

export default router;