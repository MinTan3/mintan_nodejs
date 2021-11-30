'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [{
    email: 'admin@gmail.com',
    password: '123456',
    firstName: 'Lee',
    lastName: 'Tan',
    address: 'HCM',
    gender: 1,
    typeRole: 'Role',
    keyRole: 'R1',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
