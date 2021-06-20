import { API_IMAGE_URL } from '../../../constants';

import { trailerKey } from './trailerKey';
import { stringifyCategories } from './stringifyCategories';
import { logoPath } from './logoPath';

export const matchApiDataValuesToModelKeys = (data) => {
  const tvOrMovie = data.original_name || data.name ? 'tv' : 'movie';
  const tv = tvOrMovie === 'tv' ? true : false;
  const movie = tvOrMovie === 'movie' ? true : false;

  const mediaModelTable = {
    genre: data.genre,
    categories: stringifyCategories(data),
    title: tv ? data.name : data.title,
    alt_title: tv ? data.original_name : data.original_title,
    tmdb_id: data.id,
    tv,
    movie,
    language: data.original_language,
    overview: data.overview,
    backdrop_url: data.backdrop_path
      ? `${API_IMAGE_URL}${data.backdrop_path}`
      : null,
    poster_url: data.poster_path ? `${API_IMAGE_URL}${data.poster_path}` : null,
    release_date: tv ? data.first_air_date : data.release_date,
    last_aired: tv ? data.last_air_date || 'Not Available' : null,
    runtime: tv ? data.episode_run_time[0] || null : data.runtime || null,
    revenue: movie ? `${data.revenue}` : null,
    network_logo: logoPath(data, tv),
    num_seasons: tv ? data.number_of_seasons : null,
    num_episodes: tv ? data.number_of_episodes : null,
    in_production: tv ? data.in_production : null,
    homepage: data.homepage === '' ? null : data.homepage,
    tagline: data.tagline === '' ? null : data.tagline,
    youtube_key: trailerKey(data)
  };

  return mediaModelTable;
};
