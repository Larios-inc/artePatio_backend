import { Router } from "express";
import { check } from "express-validator";

// controllers

// middlewares
import { validateAreas } from "middlewares/roles/validate";

const router = Router()

router.get('/', )

router.get('/:', )

router.post('/',[
    check('permission','permission is a must').not().isEmpty(),
    check('permission','must be than 3 characters').isLength({min:3}),
    validateAreas
],  )

router.put('/:',  )

router.delete('/:', )

export default router;