import express, { Application } from 'express';
import cors from 'cors';

// db Routes 
import {productRouter, categoryRouter, descriptionRouter,
         imgRouter, typeStateRouter, perrmissRouter, 
         roleRouter, userRouter} from '../routes'

class Server{

    private app: Application;
    private port: string;
    // here we are setting our paths
    private apiPaths = {
        product:'/artepatio/products',
        category:'/artepatio/categories',
        img:'/artepatio/descimg',
        description:'/artepatio/descriptions',
        typeState:'/artepatio/statestype',
        permiss:'/artepatio/permissions',
        role:'/artepatio/roles',
        user:'/artepatio/users',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.json() )
    }

    routes(){
        //products
        this.app.use( this.apiPaths.product, productRouter )
        this.app.use( this.apiPaths.category, categoryRouter)
        this.app.use( this.apiPaths.img, imgRouter )
        this.app.use( this.apiPaths.description, descriptionRouter)
        // user
        this.app.use( this.apiPaths.typeState, typeStateRouter)
        this.app.use( this.apiPaths.permiss, perrmissRouter )
        this.app.use( this.apiPaths.role, roleRouter)
        this.app.use( this.apiPaths.user, userRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server;