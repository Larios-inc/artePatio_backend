import { Router } from "express";
import { check } from "express-validator";

import { getAllProducts,
         DeleteProduct,
         UpdateProduct,
         createProduct,
         getByIdProduct} from "../../../controller/db-controllers/product-controllers/products";


import { validateAreas } from "../../../middlewares/roles/validate";
import { existProductById } from "helpers/productsTest";

const router = Router()

router.get('/', getAllProducts )

router.get('/:idProduct', [
    check('idProduct').custom(existProductById),
    validateAreas
], getByIdProduct )

router.post('/', createProduct )

router.put('/:idProduct', UpdateProduct )

router.delete('/:idProduct', DeleteProduct )

export default router;