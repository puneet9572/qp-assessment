import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {CONFIG} from '../common/config'

const generateToken  = async function (payload) {
    return jwt.sign(payload, CONFIG.JWT.PASS, {algorithm : 'HS256'});
}

const verifyToken = async function(token) {
    try {
        let payload = jwt.verify(token, CONFIG.JWT.PASS, { algorithms: ['HS256'] });
        if (payload) {
            return { success: true, data: payload };
        } else return { success: false };
    } catch (err) {
        console.log('Error inside verifyToken', Error)
        return { success: false }
    }

}

const hashPasswrod = async function(data, salt){
    return crypto.createHmac('sha256', salt).update(data).digest('hex');
}


export  = {verifyToken, generateToken, hashPasswrod};