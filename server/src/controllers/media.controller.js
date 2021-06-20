import '../utils/env.js';
import moment from 'moment';

import { DB_REFRESH_PATH } from '../constants/apiVersion.js';
import models from '../db/models';

// i have jokes. funny.
const numberOfDaysBetweenUpdateOfDatabase = 1;

export const mediaIndex = async (req, res) => {
  await models.Media.findAll()
    .then((data) => {
      const lastUpdate = data[0]?.created_at;
      const today = moment();
      const amountOfDays = today.diff(lastUpdate, 'days');
      console.log(data.length);

      if (amountOfDays > numberOfDaysBetweenUpdateOfDatabase) {
        return res.redirect(`${DB_REFRESH_PATH}/delete`);
      }

      if (data.length) return res.json({ data });

      return res.redirect(`${DB_REFRESH_PATH}/delete`);
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShow = async (req, res) => {
  const { id } = req.params;

  await models.Media.findByPk(id)
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShowTv = async (req, res) => {
  await models.Media.findAll({ where: { tv: true } })
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShowMovie = async (req, res) => {
  await models.Media.findAll({ where: { movie: true } })
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};
