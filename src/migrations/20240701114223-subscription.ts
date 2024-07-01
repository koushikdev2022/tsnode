'use strict';

const { QueryInterface, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      stripe_name: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(128),
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      stripe_id: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.dropTable('subscriptions');
  }
};
