import Axios from 'axios';

const DEVELOPMENT = 'http://localhost:3000/api/v1';

export const axios = Axios.create({
  baseURL: DEVELOPMENT
});
