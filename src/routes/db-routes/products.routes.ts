import { Router } from "express";

import { getAllProducts } from "../../controller/db-controllers/products";

const router = Router()

router.get('/', getAllProducts )

export default router;