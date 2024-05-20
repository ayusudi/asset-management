'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        roleName: "Regular User",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: "System Administrator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: "Asset Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: "Technical Team",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: "Auditor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
