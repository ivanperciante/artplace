module.exports = (sequelize, DataTypes) => {

    let alias = "Country"

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
        tableName: "countries"
    }

    const Country = sequelize.define(alias, cols, config)

    Country.associate = function (models){

    Country.hasMany(models.User, {
        as: 'usuarios',
        foreignKey: 'countryId'
    })

    }

    return Country

}

