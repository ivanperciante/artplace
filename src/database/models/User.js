module.exports = (sequelize, DataTypes) => {

    let alias = "User"

    let cols = {

        id: {

            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true

        },

        email: {

            type: DataTypes.STRING(45),
            allowNull: false,
            uniqueKey: true

        },

        password: {

            type: DataTypes.STRING(200),
            allowNull: false,
            uniqueKey: true

        },

        birthDate: DataTypes.DATE,

        fullName: DataTypes.STRING(200),

        admin: DataTypes.TINYINT(4),

        profileImage: DataTypes.STRING(200),

        adress: DataTypes.STRING(200),

        postalCode: DataTypes.STRING(100),

        phone: DataTypes.STRING(150),

        createdAt: DataTypes.DATE,

        updatedAt: DataTypes.DATE,

        countryId: DataTypes.TINYINT(4)
    }

    let config = {

        timestamps: true,
        underscored: false,
        tableName: "users"
    }


    const User = sequelize.define(alias, cols, config)

    User.associate = function (models){

        User.belongsTo(models.Country, {
            as: 'pais',
            foreignKey: 'countryId'
        })

        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'userId'
        })
    
        }

    return User

}