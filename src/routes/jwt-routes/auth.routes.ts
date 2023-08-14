import { Router } from "express";
import { check } from "express-validator";

import { validateAreas } from "../../middlewares/roles/validate";

import { googleSignIn, login } from "../../controller/jwt-controllers/auth";


const router = Router();

router.post('/login',[
    check('email').notEmpty().withMessage('email is a must'),
    check('email','invalid email').isEmail(),
    check('password','password is a must').not().isEmpty(),
    validateAreas
], login )

router.post('/google',[
    check('id_token','Token from gooogle is required').notEmpty(),
    validateAreas
], googleSignIn )

export default router;