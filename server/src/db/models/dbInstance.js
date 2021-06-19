import { Sequelize } from 'sequelize';
// import path from 'path';

import environmentVariables from '../config/config.js';

const env = process.env.NODE_ENV || 'development';
const config = environmentVariables[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    logQueryParameters: true
  }
);

const db = {
  sequelize,
  Sequelize
};

export default db;
