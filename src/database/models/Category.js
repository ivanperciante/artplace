module.exports = (sequelize, DataTypes) => {

    let alias = "Category"

    let cols = {

        id: {

            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: false

        },

        name: {

            type: DataTypes.STRING(200),
            allowNull: false

        },

    }

    let config = {

        timestamps: false,
        underscored: false,
        tableName: "categories"
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = function (models){

        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    
        }

    return Category

}