import BaseRoute from "../baseRoute";
import { Request, Response, NextFunction, Router } from "express";
import { celebrate, Joi } from "celebrate";
import { AdminControllers } from '../../controllers';
 
class AdminRouteClass extends BaseRoute {

    public path : string;

    constructor(path: string) {
        super();
        this.path = path;
        this.initRoutes();
    }

    get instance(): Router {
        return this.router;
    }

    initRoutes() {

            this.router.get('/test', (req:Request, res: Response, next: NextFunction) => {
                res.send('Hello testing the module');
            })

            this.router.post('/grocery-items', 
                celebrate({
                    body : {
                        name : Joi.string().min(3).max(40),
                        description : Joi.string().min(3).max(40),
                        quantity : Joi.number(),
                        price : Joi.number(),
                    }
                }),
                (req: Request, res :Response, next : NextFunction) => {
                    AdminControllers.addGrocery(req, res, next);
                }
            )

            this.router.get('/grocery-items', 
                // celebrate({
                //     body : {
                //         name : Joi.string().min(3).max(40),
                //         description : Joi.string().min(3).max(40),
                //         quantity : Joi.number(),
                //         price : Joi.number(),
                //     }
                // }),
                (req: Request, res :Response, next : NextFunction) => {
                    AdminControllers.getGrocery(req, res, next);
                }
            )
    }
}

export default new AdminRouteClass('/');