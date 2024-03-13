import { sequelize } from './index';
import { DataTypes } from'sequelize'
 
const User = sequelize.define(
    'user',
    {
        fname : { type : DataTypes.STRING, allowNull : false },
        lname : { type : DataTypes.STRING, defaultValue : '', allowNull : false },
        dob : { type : DataTypes.DATE, allowNull : false },
        address : { type : DataTypes.STRING, allowNull : false },
        status : {type : DataTypes.INTEGER, defaultValue : 1, allowNull : false },
        type : { type : DataTypes.STRING, defaultValue : 'user', allowNull : false },
        
    },
    {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
)

sequelize.sync();

export default User;