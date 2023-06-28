import { Router } from "express";

import { getAllDescription,
         getOneDescription,
         createDescription,
         updateDescription,
         deleteDescription} from "../../../controller/db-controllers/product-controllers/DescriptionProduct";

// helpers here 

const router = Router()

router.get('/', getAllDescription )

router.get('/:idDescription', getOneDescription)

router.post('/', createDescription)

router.put('/:idDescription', updateDescription)

router.delete('/:idDescription', deleteDescription)

export default router;