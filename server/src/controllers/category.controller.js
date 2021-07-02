import { Op } from 'sequelize';

import { mediaFindAll } from '../services';
import { DB_REFRESH_PATH } from '../constants';

export const categoryShowAll = async (req, res) => {
  const { mediaType, genre } = req.params;

  try {
    const findCategory = await mediaFindAll({
      where: {
        genre: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { redirect, data } = findCategory;

    if (redirect) {
      if (mediaType)
        return res.redirect(`${DB_REFRESH_PATH}/delete/${mediaType}/${genre}`);

      if (!mediaType) return res.redirect(`${DB_REFRESH_PATH}/delete/${genre}`);
    }

    if (!redirect) return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Error:', error);
  }
};

export const categoryShowAllTv = async (req, res) => {
  const { mediaType, genre } = req.params;

  try {
    const findCategoryTv = await mediaFindAll({
      where: {
        tv: true,
        genre: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { redirect, data } = findCategoryTv;

    if (redirect) {
      if (mediaType)
        return res.redirect(`${DB_REFRESH_PATH}/delete/${mediaType}/${genre}`);

      if (!mediaType) return res.redirect(`${DB_REFRESH_PATH}/delete/${genre}`);
    }

    if (!redirect) return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Tv Error:', error);
  }
};

export const categoryShowAllMovies = async (req, res) => {
  const { genre } = req.params;

  try {
    const findCategoryMovies = await mediaFindAll({
      where: {
        movie: true,
        genre: {
          [Op.iLike]: `%${genre}%`
        }
      }
    });
    const { redirect, data } = findCategoryMovies;

    if (redirect) {
      if (mediaType)
        return res.redirect(`${DB_REFRESH_PATH}/delete/${mediaType}/${genre}`);

      if (!mediaType) return res.redirect(`${DB_REFRESH_PATH}/delete/${genre}`);
    }

    if (!redirect) return res.json({ data });
  } catch (error) {
    console.log('Show Find Category Tv Error:', error);
  }
};
