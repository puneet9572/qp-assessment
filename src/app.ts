import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { Services } from './services';
import routes from './routes';
import Middleware from "./middlewares";
import { sequelize } from './models';

class Application {
    private app: express.Application;

    constructor(){
        this.app = express();
        this.init();
        this.useMiddleWares();
        this.useRoutes();
    }

    get instance(): express.Application {
        return this.app;
    }

    async init() {
        //DataBase Connection
        // await Services.DB_CONNECTION.checkDBConnection(Services.DB_CONNECTION.sequelize);
        await this.dbConnection(sequelize);
        //Create Admin Bootsrap
        await Services.BOOT.seedAdmin();

    }

    async dbConnection (sequelize){
        try {
            await sequelize.authenticate()
            await sequelize.sync()
            console.log('Connection to database established');
        } catch (error) {
            console.log('Error inside dbConnection', error);
        }
        
    }
    //Middlewares are written here--------------
    useMiddleWares(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(helmet());
        
    }

    //Routes are written here-----------------------
    useRoutes() {
        // this.app.get('/', (req, res) => { res.send('Check if coming') })
        this.app.use(routes.path, routes.instance);
        this.app.use(Middleware.InvalidRoute);
        this.app.use(Middleware.ErrorHandler);
    }

    
}

export default new Application();