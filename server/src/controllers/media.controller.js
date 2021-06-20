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
  const mediaById = await mediaFindById(id);
  const { data } = mediaById;

  return res.json({ data });
};

export const mediaShowTv = async (req, res) => {
  const mediaShowTv = await mediaFindAll({ where: { tv: true } });

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
  await mediaBulkCreate().then(() => {
    return res.redirect(`${API_CURRENT_VERSION}/media`);
  });
};

export const mediaDeleteAll = async (req, res) => {
  await mediaDestroy().then(() => {
    return res.redirect(`${DB_REFRESH_PATH}/create`);
  });
};
