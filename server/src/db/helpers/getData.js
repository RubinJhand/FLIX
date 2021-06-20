import axios from 'axios';

import { API_URL } from '../../constants/externalAPI/externalAPIRoutes';

export const getRawData = async (url) => {
  const apiData = await axios
    .get(`${API_URL}${url}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });

  return apiData;
};
