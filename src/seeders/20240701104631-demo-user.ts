'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:any, Sequelize:any) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      first_name: 'srk',
      last_name: 'khan',
      email:'srk@yopmail.com',
      password:'12345678',
    
     
    },
    {
      first_name: 'admin',
      last_name: 'admin',
      email:'admin@yopmail.com',
      password:'12345678',
      
     
    },
    {
      first_name: 'vendor',
      last_name: 'vendor',
      email:'vendor@yopmail.com',
      password:'12345678',
      
     
    }
  ], {});
  },

  async down (queryInterface:any, Sequelize:any) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
