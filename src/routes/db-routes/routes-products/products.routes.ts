import { Router } from "express";
import { check } from "express-validator";

import { getAllProducts,
         DeleteProduct,
         UpdateProduct,
         createProduct,
         getByIdProduct} from "../../../controller/db-controllers/product-controllers/products";

const router = Router()

router.get('/', getAllProducts )

router.get('/:idProduct', getByIdProduct )

router.post('/', createProduct )

router.put('/:idProduct', UpdateProduct )

router.delete('/:idProduct', DeleteProduct )

export default router;