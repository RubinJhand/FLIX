import { API_KEY } from './constants.externalApiUrls';
import {
  PRIME,
  HBO_MAX,
  NETFLIX,
  HULU,
  DISNEY_PLUS
} from './constants.mediaProviders';

export const genreUrls = [
  {
    genre: 'DC Universe',
    list: true,
    url: `/list/3?api_key=${API_KEY}&language=en-US`
  },
  {
    genre: 'Marvel',
    list: true,
    url: `/list/8920?api_key=${API_KEY}&language=en-US`
  },
  {
    genre: 'Star Wars',
    list: true,
    url: `/list/8136?api_key=${API_KEY}&language=en-US`
  },
  {
    genre: 'Pixar',
    list: true,
    url: `/list/9095?api_key=${API_KEY}&language=en-US`
  },
  {
    genre: 'Amazon Prime',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${PRIME}`
  },
  {
    genre: 'HBO Max',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${HBO_MAX}`
  },
  {
    genre: 'Netflix',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${NETFLIX}`
  },
  {
    genre: 'hulu',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${HULU}`
  },
  {
    genre: 'Disney+',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_networks=${DISNEY_PLUS}`
  },
  {
    genre: 'Popular',
    list: false,
    url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  },
  {
    genre: 'Trending',
    list: false,
    url: `/trending/tv/day?api_key=${API_KEY}`
  },
  {
    genre: 'Top Rated',
    list: false,
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  },
  {
    genre: 'Airing Today',
    list: false,
    url: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
  },
  {
    genre: 'Comedy',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&with_original_language=en`
  },
  {
    genre: 'Documentary',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&with_original_language=en`
  },
  {
    genre: 'Sci-Fi & Fantasy',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&with_original_language=en`
  },
  {
    genre: 'Kids and family',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762,10751&with_original_language=en`
  },
  {
    genre: 'Animation',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&with_original_language=en`
  },
  {
    genre: 'Drama',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&with_original_language=en`
  },
  {
    genre: 'Action and adventure',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&with_original_language=en`
  },
  {
    genre: 'Reality',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&with_original_language=en`
  },
  {
    genre: 'Crime',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&with_original_language=en`
  },
  {
    genre: 'Mystery',
    list: false,
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&with_original_language=en`
  },
  {
    genre: 'Top Rated',
    list: false,
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&region=CA`
  },
  {
    genre: 'Popular',
    list: false,
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=GB`
  },
  {
    genre: 'Coming Soon',
    list: false,
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=US`
  },
  {
    genre: 'Now Playing',
    list: false,
    url: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`
  },
  {
    genre: 'Comedy',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_original_language=en`
  },
  {
    genre: 'Animation',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=en`
  },
  {
    genre: 'Mystery',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_original_language=en`
  },
  {
    genre: 'Thriller',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_original_language=en`
  },
  {
    genre: 'Fantasy',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_original_language=en`
  },
  {
    genre: 'History',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36&with_original_language=en`
  },
  {
    genre: 'Documentary',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_original_language=en`
  },
  {
    genre: 'Science Fiction',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_original_language=en`
  },
  {
    genre: 'Family',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_original_language=en`
  },
  {
    genre: 'Horror',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_original_language=en`
  },
  {
    genre: 'Adventure',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_original_language=en`
  },
  {
    genre: 'Drama',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_original_language=en`
  },
  {
    genre: 'Action',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en`
  },
  {
    genre: 'Crime',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_original_language=en`
  },
  {
    genre: 'Romantic',
    list: false,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_original_language=en`
  }
];
