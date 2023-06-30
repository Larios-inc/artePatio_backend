import { Router } from "express";
import { check } from "express-validator";

// controllers

import { DeleteTypeState, createTypeState,
         getAllTypeStates, getTypeState,
        updateTypeState } from "../../../controller/db-controllers/user-controllers/typeState";


const router = Router()

router.get('/', getAllTypeStates)

router.get('/:idTypeState', getTypeState)

router.post('/', createTypeState )

router.put('/:idTypeState', updateTypeState )

router.delete('/:idTypeState', DeleteTypeState)

export default router;