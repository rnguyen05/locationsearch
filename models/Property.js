module.exports = function(sequelize, DataTypes) {
    var Property = sequelize.define("Property", {
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
    return Property;
  };