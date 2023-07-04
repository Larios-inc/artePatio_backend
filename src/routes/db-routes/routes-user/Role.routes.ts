import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createRole, deleteRole, 
         getAllRole, getByIdRole, 
         updateRole } from "../../../controller/db-controllers/user-controllers/Role";

// helpers         
import { roleIdExist, testRoleIfExist } from "../../../helpers/usersTests";

// middlewares
import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllRole)

router.get('/:idRole', [
    check('idRole').custom( roleIdExist),
    validateAreas
], getByIdRole)

router.post('/', [
    check('role_Name').custom(testRoleIfExist),
    validateAreas
], createRole)

router.put('/:idRole', [
    check('idRole').custom( roleIdExist),
    check('role_Name').custom(testRoleIfExist),
    validateAreas
],updateRole )

router.delete('/:idRole', [
    check('idRole').custom( roleIdExist),
    validateAreas
],deleteRole )

export default router;