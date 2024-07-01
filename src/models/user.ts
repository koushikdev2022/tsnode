// models/User.ts

import { Model, DataTypes } from 'sequelize';
const sequelize = require("sequelize");

interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

class User extends Model<UserAttributes> {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User', // Name of the model
    tableName: 'users', // Name of the table
    timestamps: true, // Sequelize adds createdAt and updatedAt fields automatically
  }
);

export default User;
