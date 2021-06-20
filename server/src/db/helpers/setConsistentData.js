import { API_IMAGE_URL } from '../../constants/externalAPI/externalAPIRoutes.js';

export const setConsistentData = (data) => {
  const tvOrMovie = data.original_name ? 'tv' : 'movie';
  const tv = tvOrMovie === 'tv' ? true : false;
  const movie = tvOrMovie === 'movie' ? true : false;

  const title = tvOrMovie === 'tv' ? data.name : data.title;
  const alt_title =
    tvOrMovie === 'tv' ? data.original_name : data.original_title;
  const airDate = data.first_air_date ? data.first_air_date : 'unknown';
  const release_date = tvOrMovie === 'tv' ? airDate : data.release_date;
  const video_url = data.video_url
    ? data.video_url
    : `${API_IMAGE_URL}${data.backdrop_path}`;

  return {
    genre: data.genre,
    title,
    alt_title,
    tmdb_id: data.id,
    tv,
    movie,
    language: data.original_language,
    overview: data.overview,
    backdrop_url: `${API_IMAGE_URL}${data.backdrop_path}`,
    poster_url: `${API_IMAGE_URL}${data.poster_path}`,
    release_date,
    video_url
  };
};
