import Axios from 'axios';

// const DEVELOPMENT = 'http://localhost:3000/api/v1/category';
const DEVELOPMENT = 'http://127.0.0.1:3000/api/v1';

export const axios = Axios.create({
  baseURL: DEVELOPMENT
});
