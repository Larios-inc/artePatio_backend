import express, { Application } from 'express';
import cors from 'cors';

// db Routes 
import productRouter from '../routes/db-routes/products.routes'

// JWT routes

class Server{

    private app: Application;
    private port: string;
    // here we are setting our paths
    private apiPaths = {
        produt:'/artepatio/products',
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
        this.app.use( this.apiPaths.produt, productRouter )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server;