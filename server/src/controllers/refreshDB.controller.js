import '../utils/env.js';

import models from '../db/models';
import { mapGenres } from '../db/helpers/mapGenres.js';
import {
  API_CURRENT_VERSION,
  DB_REFRESH_PATH
} from '../constants/apiVersion.js';

export const mediaDeleteAll = async (req, res) => {
  await models.Media.destroy({ truncate: true })
    .then((response) => res.redirect(`${DB_REFRESH_PATH}/createBulk`))
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaCreateBulk = async (req, res) => {
  const bulkDataInsert = await mapGenres();

  await models.Media.bulkCreate(bulkDataInsert)
    .then((response) => {
      console.log('redirect');
      return res.redirect(`${API_CURRENT_VERSION}/media`);
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};
