import { DataTypes } from 'sequelize';
import db from './dbInstance';

const Media = db.sequelize.define(
  'media',
  {
    genre: DataTypes.STRING,
    categories: DataTypes.STRING,
    title: DataTypes.STRING,
    alt_title: DataTypes.STRING,
    tmdb_id: DataTypes.INTEGER,
    tv: DataTypes.BOOLEAN,
    movie: DataTypes.BOOLEAN,
    language: DataTypes.STRING,
    overview: DataTypes.TEXT,
    backdrop_url: DataTypes.TEXT,
    poster_url: DataTypes.TEXT,
    release_date: DataTypes.STRING,
    last_aired: DataTypes.STRING,
    runtime: DataTypes.INTEGER,
    revenue: DataTypes.STRING,
    network_logo: DataTypes.TEXT,
    num_seasons: DataTypes.INTEGER,
    num_episodes: DataTypes.INTEGER,
    in_production: DataTypes.BOOLEAN,
    homepage: DataTypes.TEXT,
    tagline: DataTypes.STRING,
    youtube_key: DataTypes.STRING
  },
  { createdAt: 'created_at', updatedAt: 'updated_at' }
);

Media.sync();

export default Media;
