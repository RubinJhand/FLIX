import '../../utils/env.js';
const API_KEY_V3 = process.env.API_KEY_V3;

import { PRIME, HBO_MAX, NETFLIX, HULU, DISNEY_PLUS } from './providers.js';

export const genreList = [
  {
    genre: 'Amazon Prime',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${PRIME}`
  },
  {
    genre: 'HBO Max',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${HBO_MAX}`
  },
  {
    genre: 'Netflix',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${NETFLIX}}`
  },
  {
    genre: 'hulu',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${HULU}`
  },
  {
    genre: 'Disney+',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${DISNEY_PLUS}}`
  },
  {
    genre: 'Popular',
    url: `tv/popular?api_key=${API_KEY_V3}&language=en-US&page=1`
  },
  {
    genre: 'Trending',
    url: `trending/tv/day?api_key=${API_KEY_V3}`
  },
  {
    genre: 'Top Rated',
    url: `tv/top_rated?api_key=${API_KEY_V3}&language=en-US&page=1`
  },
  {
    genre: 'Airing Today',
    url: `tv/airing_today?api_key=${API_KEY_V3}&language=en-US&page=1`
  },
  {
    genre: 'Comedy',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&with_original_language=en`
  },
  {
    genre: 'Documentary',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&with_original_language=en`
  },
  {
    genre: 'Sci-Fi & Fantasy',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&with_original_language=en`
  },
  {
    genre: 'Kids and family',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762,10751&with_original_language=en`
  },
  {
    genre: 'Animation',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&with_original_language=en`
  },
  {
    genre: 'Drama',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&with_original_language=en`
  },
  {
    genre: 'Action and adventure',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&with_original_language=en`
  },
  {
    genre: 'Reality',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&with_original_language=en`
  },
  {
    genre: 'Crime',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&with_original_language=en`
  },
  {
    genre: 'Mystery',
    url: `discover/tv?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&with_original_language=en`
  },
  {
    genre: 'Latest',
    url: `movie/latest?api_key=${API_KEY_V3}&language=en-US`
  },
  {
    genre: 'Top Rated',
    url: `movie/top_rated?api_key=${API_KEY_V3}&language=en-US&page=1&region=CA`
  },
  {
    genre: 'Popular',
    url: `movie/popular?api_key=${API_KEY_V3}&language=en-US&page=1&region=GB`
  },
  {
    genre: 'Coming Soon',
    url: `movie/upcoming?api_key=${API_KEY_V3}&language=en-US&page=1&region=US`
  },
  {
    genre: 'Now Playing',
    url: `movie/now_playing?api_key=${API_KEY_V3}&language=en-US&page=1&region=US`
  },
  {
    genre: 'Comedy',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_original_language=en`
  },
  {
    genre: 'Animation',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=en`
  },
  {
    genre: 'Mystery',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_original_language=en`
  },
  {
    genre: 'Thriller',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_original_language=en`
  },
  {
    genre: 'Fantasy',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_original_language=en`
  },
  {
    genre: 'History',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36&with_original_language=en`
  },
  {
    genre: 'Documentary',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_original_language=en`
  },
  {
    genre: 'Science Fiction',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_original_language=en`
  },
  {
    genre: 'Family',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_original_language=en`
  },
  {
    genre: 'Horror',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_original_language=en`
  },
  {
    genre: 'Adventure',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_original_language=en`
  },
  {
    genre: 'Drama',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_original_language=en`
  },
  {
    genre: 'Action',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en`
  },
  {
    genre: 'Crime',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_original_language=en`
  },
  {
    genre: 'Romantic',
    url: `discover/movie?api_key=${API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_original_language=en`
  }
];
