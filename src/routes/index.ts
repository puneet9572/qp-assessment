import AdminRoutes from './admin';
import BaseRoute from "./baseRoute";
import { Router } from "express";

class Routes extends BaseRoute {

    public path = '/api';

    constructor () {
        super();
        this.init();
    }

    get instance(): Router {
        return this.router;
    }

    private init() {
        console.log('Reached inside 1')
        this.router.use(AdminRoutes.path, AdminRoutes.instance);
    }

}

export default new Routes();