import { Router } from "express";
import { check } from "express-validator";

import { getAllProducts,
         DeleteProduct,
         UpdateProduct,
         createProduct,
         getByIdProduct} from "../../../controller/db-controllers/product-controllers/products";


import { activeProductTrue, existProductById } from "../../../helpers/productsTest";
         
import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllProducts )

router.get('/:idProduct', [
    check('idProduct').custom(existProductById),
    check('idProduct').custom(activeProductTrue),
    validateAreas
], getByIdProduct )

router.post('/', createProduct )

router.put('/:idProduct', UpdateProduct )

router.delete('/:idProduct', DeleteProduct )

export default router;