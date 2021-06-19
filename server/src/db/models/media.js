import { DataTypes } from 'sequelize';
import db from './dbInstance';

const Media = db.sequelize.define(
  'media',
  {
    title: DataTypes.STRING,
    alt_title: DataTypes.STRING,
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
  { underscored: true }
);

// Media.associate = (models) => {};
Media.sync();

export default Media;
