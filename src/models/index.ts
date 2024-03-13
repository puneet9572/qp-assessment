

import { Sequelize } from 'sequelize';
import { CONFIG } from '../common/config';

export const sequelize = new Sequelize({
   
    username : CONFIG.DB_CONFIG.USER,
    password : CONFIG.DB_CONFIG.PASSWORD,
    host : CONFIG.DB_CONFIG.HOST,
    dialect : 'mysql',
    database : CONFIG.DB_CONFIG.DATABASE,
    port : 3304
});


