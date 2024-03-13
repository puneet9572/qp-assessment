import { Request, Response, NextFunction } from "express";
import Products from '../models/product';
import { sendResponse } from '../common/handlers';
import { SUCCESS } from '../common/response';

export const AdminControllers = {


    addGrocery : async function(req :Request, res: Response, next: NextFunction){
        try {
            let payload = req.body;
            let save = {
                name : payload.name,
                description : payload.description,
                quantity : payload.quantity,
                price : payload.price,
                creatorId : 'Sample id 21312321'
            }
            let grocery = await Products.create(save);
            return sendResponse(res, SUCCESS.DEFAULT, grocery);
        } catch (error) {
            console.log('Error inside addGrocery', error)
            next(error);
        }
    },

    getGrocery : async function(req: Request, res: Response, next: NextFunction){
        try {
            let grocery = await Products.findAll();
            return sendResponse(res, SUCCESS.DEFAULT, grocery);
        } catch (error) {
            console.log('Error inside getGrocery', error)
            next(error);
        }
    }

}