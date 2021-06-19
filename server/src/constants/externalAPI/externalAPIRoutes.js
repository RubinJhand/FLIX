import '../../utils/env.js';
const API_KEY = process.env.API_KEY_V3;

export const API_URL = 'https://api.themoviedb.org/3/';

export const API_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const VIDEO_KEY = `videos?api_key=${API_KEY}&language=en-US`;
