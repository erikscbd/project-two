const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    media_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // genre_type: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    product_artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    retail_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    wholesale_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // this is the genre
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
