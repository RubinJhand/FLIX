import axios from 'axios';

import { API_URL } from '../../constants';
import { createSeasonsAnalogue } from './formatData/createSeasonsAnalogue';

export const formatSeasonsData = async (url) => {
  try {
    const initialApiData = await axios.get(`${API_URL}${url}`);

    const formattedData = createSeasonsAnalogue(initialApiData.data);

    return formattedData;
  } catch (error) {
    console.log('ERROR in Format Seasons Data:', error);
  }
};
