import { Response, Request, NextFunction } from "express";
import { errors } from "celebrate";

export const InvalidRoute = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: 'Invalid route',
        statusCode: 404
    });
}

export const ErrorHandler = function (err: any, req: Request, res: Response, next: NextFunction) {

    if (errors(err)) {
        let messagetosend = err.joi.details[0].message.replace(/"/g, '')
        messagetosend = messagetosend[0].toUpperCase() + messagetosend.slice(1);
        return res.status(400).send({
            success: false,
            statusCode: 400,
            key: err.joi.details[0].context.key,
            message: messagetosend
        });
    } else if (err.expose) {
        return res.status(err.status).json({
            success: false,
            message: err.message,
            statusCode: err.statusCode
        });
    } else {
        console.log("............",err)
        console.log('ERROR -> ', err);
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal Server Error'
        });
    }
}