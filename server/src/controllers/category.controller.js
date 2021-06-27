import { Op } from 'sequelize';

import { mediaFindAll } from '../services';

export const categoryShowAll = async (req, res) => {
  const { genre } = req.params;

  try {
    const findCategory = await mediaFindAll({
      where: {
        genre: {
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
        genre: {
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
        movie: true,
        genre: {
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
