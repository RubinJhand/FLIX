export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.STRING
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
        type: Sequelize.TEXT
      },
      poster_url: {
        type: Sequelize.TEXT
      },
      release_date: {
        allowNull: true,
        type: Sequelize.STRING
      },
      last_aired: {
        allowNull: true,
        type: Sequelize.STRING
      },
      runtime: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      revenue: {
        allowNull: true,
        type: Sequelize.STRING
      },
      network_logo: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      num_seasons: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      num_episodes: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      in_production: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      homepage: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      tagline: {
        allowNull: true,
        type: Sequelize.STRING
      },
      youtube_key: {
        allowNull: true,
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
