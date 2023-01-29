module.exports = (sequelize, DataTypes) => {

    let alias = "Order"

    let cols = {

        id: {

            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },

        subtotal: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        },

        discount: DataTypes.INTEGER(10),

        total: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        },

        proofOfPayment: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }

    let config = {

        tableName: "orders",
        timestamps: false,
        underscored: false
    }

    const Order = sequelize.define(alias, cols, config)

    Order.associate = function (models){

        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        })

 
        Order.belongsToMany(models.Product,{
            as: 'hasproducts',
            through: 'ordersProducts',
            foreignKey: 'orderId',
            otherKey: 'productId',
            timestamps: false
        })
    
        }


    return Order
    
}

