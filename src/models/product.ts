import { sequelize } from './index';
import { DataTypes } from'sequelize'
 
const Products = sequelize.define(
    'products',
    {
        name : { type : DataTypes.STRING, allowNull : false },
        description : { type : DataTypes.STRING, allowNull : false },
        quantity : { type : DataTypes.INTEGER, defaultValue : 0, allowNull : false },
        price : { type : DataTypes.DECIMAL(10, 2), allowNull : false },
        status : { type : DataTypes.INTEGER,  defaultValue : 1, allowNull : false},
        creatorId : { type : DataTypes.STRING, allowNull : false },

    },
    {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
)

export default Products;