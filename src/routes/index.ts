// PRODUCTS 
import productRouter from './db-routes/routes-products/products.routes'
import categoryRouter from './db-routes/routes-products/categories.routes'
import imgRouter from './db-routes/routes-products/descImg.routes'
import descriptionRouter from './db-routes/routes-products/description.routes'
// USER 
import typeStateRouter from './db-routes/routes-user/typeState.routes'
import perrmissRouter from './db-routes/routes-user/permissions.routes'
import roleRouter from './db-routes/routes-user/Role.routes'

export {productRouter, categoryRouter, imgRouter, 
        typeStateRouter, descriptionRouter, perrmissRouter,
        roleRouter }