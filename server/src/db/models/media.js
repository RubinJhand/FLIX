'use strict';

export default (sequelize, DataTypes) => {
  const Media = sequelize.define(
    'media',
    {
      title: DataTypes.STRING,
      tmdb_id: DataTypes.INTEGER,
      tv: DataTypes.BOOLEAN,
      movie: DataTypes.BOOLEAN,
      language: DataTypes.STRING,
      overview: DataTypes.TEXT,
      backdrop_url: DataTypes.STRING,
      poster_url: DataTypes.STRING,
      release_date: DataTypes.STRING,
      video_url: DataTypes.STRING
    },
    { createdAt: 'created_at', updatedAt: 'updated_at' }
  );
};
