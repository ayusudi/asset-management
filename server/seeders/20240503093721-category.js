'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        categoryName: "Elektronik dan Teknologi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Pakaian dan Aksesoris",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Konsumsi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Kesehatan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Alat Tulis Kantor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Mainan dan Hiburan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Alat-alat Bangunan dan Perbaikan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Edukasi",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
