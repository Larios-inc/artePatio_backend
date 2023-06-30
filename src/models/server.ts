import express, { Application } from 'express';
import cors from 'cors';

// db Routes 
import {productRouter, categoryRouter, descriptionRouter,
         imgRouter, typeStateRouter} from '../routes'

class Server{

    private app: Application;
    private port: string;
    // here we are setting our paths
    private apiPaths = {
        product:'/artepatio/products',
        category:'/artepatio/categories',
        img:'/artepatio/descimg',
        description:'/artepatio/descriptions',
        typeState:'/artepatio/statestype'
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
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server;