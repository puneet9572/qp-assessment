
import { Router } from "express";
import BaseRoute from "../baseRoute";
import AdminRoutes from "./admin";

class AppRoutes extends BaseRoute {

    public path = '/admin'

    constructor(){
        super();
        this.init();
    }

    get instance(): Router {
        return this.router;
    }

    private routeMiddlewares() {
        this.router.use('/', (req, res, next) => {

            // prints the route endpoint on the console
            console.log(`\n========================= NEW REQUEST -> ${req.method} ${req.originalUrl}`);
            console.log(req.body);
            console.log(`\n=========================`);
            console.log(req.headers)
            next();
        });
    }

    private init() {
        this.routeMiddlewares();

        // routes go here
        this.router.use(AdminRoutes.path, AdminRoutes.instance);


    }
}

export default new AppRoutes();