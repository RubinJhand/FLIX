'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      alt_title: {
        type: Sequelize.STRING
      },
      tmdb_id: {
        type: Sequelize.INTEGER
      },
      tv: {
        type: Sequelize.BOOLEAN
      },
      movie: {
        type: Sequelize.BOOLEAN
      },
      language: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      backdrop_url: {
        type: Sequelize.STRING
      },
      poster_url: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      video_url: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('media');
  }
};
