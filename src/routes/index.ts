// PRODUCTS 
import productRouter from './db-routes/routes-products/products.routes'
import categoryRouter from './db-routes/routes-products/categories.routes'
import imgRouter from './db-routes/routes-products/descImg.routes'
import descriptionRouter from './db-routes/routes-products/description.routes'
// USER 
import typeStateRouter from './db-routes/routes-user/typeState.routes'
import perrmissRouter from './db-routes/routes-user/permissions.routes'
import roleRouter from './db-routes/routes-user/Role.routes'
import userRouter from './db-routes/routes-user/user.routes'

// JWT 
import authUserRouter from './jwt-routes/auth.routes'

export {productRouter, categoryRouter, 
        imgRouter, typeStateRouter, 
        descriptionRouter, perrmissRouter,
        roleRouter, userRouter, authUserRouter }