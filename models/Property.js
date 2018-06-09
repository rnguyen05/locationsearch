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
      property_id: {
        type: DataTypes.INTEGER
      }
    });
    return Property;
  };