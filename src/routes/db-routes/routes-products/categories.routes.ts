import { Router } from "express";
import { check } from "express-validator";

import { createCategory, 
         deleteCategory, 
         getAllCategories, 
         getCategory, 
         updateCategory} from "../../../controller/db-controllers/product-controllers/category";

// helperss here 

import { existCategory, 
         existCategoryId } from "../../../helpers/productsTest";

// Middlewares here

import { validateAreas } from "../../../middlewares/roles/validate";

const router = Router()

router.get('/', getAllCategories )

router.get('/:idCategory', [
    check('idCategory').custom(existCategoryId),
    validateAreas
], getCategory)

router.post('/',[
    check('categoryName','Name Category is a must').not().isEmpty(),
    check('categoryName','Name must be than 3 characters').isLength({min:3}),
    check('categoryName').custom(existCategory),
    validateAreas
], createCategory)

router.put('/:idCategory',[
    check('idCategory').custom(existCategoryId),
    check('categoryName').custom(existCategory),
    validateAreas
], updateCategory)

router.delete('/:idCategory',[
    check('idCategory').custom(existCategoryId),
    validateAreas
], deleteCategory)

export default router;