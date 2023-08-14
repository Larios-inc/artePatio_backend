import express, { Application } from 'express';
import cors from 'cors';

// db Routes 
import {productRouter, categoryRouter, descriptionRouter,
         imgRouter, typeStateRouter, perrmissRouter, 
         roleRouter, userRouter, authUserRouter} from '../routes'

class Server{

    private app: Application;
    private port: string;
    // here we are setting our paths
    private productsPaths = {
        product:'/artepatio/products',
        category:'/artepatio/categories',
        img:'/artepatio/descimg',
        description:'/artepatio/descriptions',
    }
    private usersPath = {
        typeState:'/artepatio/statestype',
        permiss:'/artepatio/permissions',
        role:'/artepatio/roles',
        user:'/artepatio/users',
    }
    private authPath = {
        authUser:'/artepatio/auth'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.json() )
        
        //public directory
        this.app.use(express.static('public'))
    }

    routes(){
        //products
        this.app.use( this.productsPaths.product, productRouter )
        this.app.use( this.productsPaths.category, categoryRouter)
        this.app.use( this.productsPaths.img, imgRouter )
        this.app.use( this.productsPaths.description, descriptionRouter)
        // user
        this.app.use( this.usersPath.typeState, typeStateRouter)
        this.app.use( this.usersPath.permiss, perrmissRouter )
        this.app.use( this.usersPath.role, roleRouter)
        this.app.use( this.usersPath.user, userRouter)
        //jwt
        this.app.use( this.authPath.authUser, authUserRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server;