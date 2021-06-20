import ENV from '../utils/env';

export const API_KEY = ENV.API_KEY_V3;
export const API_URL = 'https://api.themoviedb.org/3';
export const API_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const VIDEO_URL = `videos?api_key=${API_KEY}&language=en-US`;
export const COLLECTION_URL = `?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
