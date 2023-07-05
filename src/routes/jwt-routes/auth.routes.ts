import { Router } from "express";
import { check } from "express-validator";

import { validateAreas } from "../../middlewares/roles/validate";

import { login } from "../../controller/jwt-controllers/auth";


const router = Router();

router.post('/login',[
    check('email').notEmpty().withMessage('email is a must'),
    check('email','invalid email').isEmail(),
    check('password','password is a must').not().isEmpty(),
    validateAreas
], login )

export default router;