import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createUser, 
         deleteUser, 
         getAllUsers, 
         getByIdUser, 
         updateUser } from "../../../controller/db-controllers/user-controllers/user";

// helpers
import { idUserValid, 
         mailExist, 
         roleIdExist, 
         roleNameValid, 
         testUserNameExist } from "../../../helpers/usersTests";

// middlewares
import { validateAreas, 
         tieneRole, 
         validJWT } from "../../../middlewares";

const router = Router()

router.get('/',[
    validJWT,
    validateAreas
], getAllUsers)

router.get('/:idUser',[
    check('idUser').custom( idUserValid ),
    validateAreas
], getByIdUser)

router.post('/',[
    check('username').notEmpty().withMessage('user name is a must'),
    check('username').isLength({min:3}).withMessage('user name must be more than 2 characters'),
    check('username').custom( testUserNameExist ),
    check('email','email is a must').not().isEmpty(),
    check('email','Email must be a valid mail').isEmail().normalizeEmail(),
    check('email').custom( mailExist ),
    check('password').trim().notEmpty().isString().withMessage('enter a valid password'),
    check('password','pass must be strong').isStrongPassword(),
    check('roleId','ID is a must').not().isEmpty(),
    check('roleId').custom( roleNameValid ),
    validateAreas
], createUser )

router.put('/:idUser', [
    validJWT,
    tieneRole('USER','ADMIN','SUPER_ADMIN'),
    check('idUser').custom( idUserValid ),
    check('username').notEmpty().withMessage('user name is a must'),
    check('username').isLength({min:3}).withMessage('user name must be more than 2 characters'),
    check('username').custom( testUserNameExist ),
    check('email','email is a must').not().isEmpty(),
    check('email','Email must be a valid mail').isEmail().normalizeEmail(),
    check('email').custom( mailExist ),
    check('password').trim().notEmpty().isString().withMessage('enter a valid password'),
    check('password','pass must be strong').isStrongPassword(),
    check('roleId','ID is a must').not().isEmpty(),
    check('roleId').custom( roleNameValid ),
    validateAreas
],updateUser )

router.delete('/:idUser', [
    validJWT,
    tieneRole('USER','ADMIN','SUPER_ADMIN'),
    check('idUser','Missing ID').notEmpty(),
    check('idUser').custom( idUserValid ),
    validateAreas
], deleteUser)

export default router;