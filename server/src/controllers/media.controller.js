import { DB_REFRESH_PATH, API_CURRENT_VERSION } from '../constants';

import {
  mediaFindAll,
  mediaFindById,
  mediaBulkCreate,
  mediaDestroy
} from '../services';

export const mediaShowAll = async (req, res) => {
  try {
    const allMedia = await mediaFindAll();
    const { redirect, data } = allMedia;

    if (redirect) return res.redirect(`${DB_REFRESH_PATH}/delete`);
    return res.json({ data });
  } catch (error) {
    console.log('Show all Error:', error);
  }
};

export const mediaShowOne = async (req, res) => {
  const { id } = req.params;
  const mediaById = await mediaFindAll({ where: { id } });
  const { data } = mediaById;

  return res.json({ data });
};

export const mediaShowTv = async (req, res) => {
  const mediaShowTv = await mediaFindAll({
    where: { tv: true },
    order: [
      ['release_date', 'DESC'],
      ['last_aired', 'ASC']
    ]
  });

  const { redirect, data } = mediaShowTv;

  if (redirect) return res.redirect(`${DB_REFRESH_PATH}/delete`);
  return res.json({ data });
};

export const mediaShowMovie = async (req, res) => {
  const mediaShowMovies = await mediaFindAll({ where: { movie: true } });

  const { redirect, data } = mediaShowMovies;

  if (redirect) return res.redirect(`${DB_REFRESH_PATH}/delete`);
  return res.json({ data });
};

export const mediaCreateBulk = async (req, res) => {
  const { mediaType, genre } = req.params;

  await mediaBulkCreate()
    .then(() => {
      if (mediaType)
        return res.redirect(
          `${API_CURRENT_VERSION}/category/${mediaType}/${genre}`
        );

      if (!mediaType)
        return res.redirect(`${API_CURRENT_VERSION}/category/${genre}`);
    })
    .catch((error) => {
      console.log('Error in mediaCreateBulk:', error);
    });
};

export const mediaDeleteAll = async (req, res) => {
  const { mediaType, genre } = req.params;

  await mediaDestroy()
    .then(() => {
      if (mediaType)
        return res.redirect(`${DB_REFRESH_PATH}/create/${mediaType}/${genre}`);

      if (!mediaType) return res.redirect(`${DB_REFRESH_PATH}/create/${genre}`);
    })
    .catch((error) => {
      console.log('Error in mediaDeleteAll:', error);
    });
};
