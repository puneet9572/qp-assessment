import { Response } from "express";


export const sendResponse = async function(r: Response, b, d = {}) {
    b.data = d;
    r.status(b.httpCode).json(b);
}

