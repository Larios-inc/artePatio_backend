import { Router } from "express";
import { check } from "express-validator";

import { getAllProducts,
         DeleteProduct,
         UpdateProduct,
         createProduct,
         getByIdProduct} from "../../../controller/db-controllers/product-controllers/products";


import { NameProduct, 
         activeProductTrue,
         existProductById } from "../../../helpers/productsTest";
         
import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllProducts )

router.get('/:idProduct', [
    check('idProduct').custom(existProductById),
    check('idProduct').custom(activeProductTrue),
    validateAreas
], getByIdProduct )

router.post('/',[
    check('name_Product','Name is a must').not().isEmpty(),
    check('name_Product','Name must have more than 3 characters').isLength({min:3}),
    check('name_Product').custom(NameProduct),
    check('price','Price is a must').not().isEmpty(),
    check('price','Price must be a number').isNumeric(),
    check('img_Main_Product','img mail is a must').not().isEmpty(),
    validateAreas
], createProduct )

router.put('/:idProduct',[
    check('idProduct').custom(existProductById),
    check('name_Product').custom(NameProduct),
    validateAreas
], UpdateProduct )

router.delete('/:idProduct',[
    check('idProduct').custom(existProductById),
    validateAreas
], DeleteProduct )

export default router;