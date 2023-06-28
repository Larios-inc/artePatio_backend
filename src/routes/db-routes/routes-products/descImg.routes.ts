import { Router } from "express";

import { getAllDescImg,
         getOneDescImg,
         createDescImg,
         DELETEdescImg,
         updateDescImg
    } from "../../../controller/db-controllers/product-controllers/descImg";

// helpers here 

const router = Router()

router.get('/', getAllDescImg)

router.get('/:idDescImg', getOneDescImg)

router.post('/', createDescImg)

router.put('/:idDescImg', updateDescImg)

router.delete('/:idDescImg', DELETEdescImg)

export default router;