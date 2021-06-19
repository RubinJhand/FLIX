'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('media', []);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('media', null, {});
  }
};
