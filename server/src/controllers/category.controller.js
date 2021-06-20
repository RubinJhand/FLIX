import { Op } from 'sequelize';

import {
  mediaFindAll,
  mediaFindById,
  mediaBulkCreate,
  mediaDestroy
} from '../services';

import models from '../db/models';

export const categoryShowAll = async (req, res) => {
  const { genre } = req.params;

  try {
    const findCategory = await mediaFindAll({
      where: {
        categories: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { data } = findCategory;

    return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Error:', error);
  }
};

export const categoryShowAllTv = async (req, res) => {
  const { genre } = req.params;

  try {
    const findCategoryTv = await mediaFindAll({
      where: {
        tv: true,
        categories: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { data } = findCategoryTv;

    return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Tv Error:', error);
  }
};

export const categoryShowAllMovies = async (req, res) => {
  const { genre } = req.params;

  try {
    const findCategoryTv = await mediaFindAll({
      where: {
        tv: true,
        categories: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { data } = findCategoryTv;

    return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Tv Error:', error);
  }
};
