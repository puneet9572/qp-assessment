// import { sequelize } from './index';
import { sequelize } from './index';
import {Services} from '../services';
import { DataTypes } from 'sequelize';
console.log(Services);
const Admin =  sequelize.define(
    'admin',
    {
        type : { type : DataTypes.STRING, defaultValue : 'admin', allowNull : false },
        status : { type : DataTypes.INTEGER, defaultValue : 1, allowNull : false },
        email : { type : DataTypes.STRING, allowNull : false },
        password : { type : DataTypes.STRING, allowNull : false },
    },
    {   
        freezeTableName : true,
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
)

export default Admin; 