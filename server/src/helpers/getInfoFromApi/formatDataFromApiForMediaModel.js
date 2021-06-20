import axios from 'axios';

import { API_URL, COLLECTION_URL } from '../../constants';
import { matchApiDataValuesToModelKeys } from './formatData/matchApiDataValuesToModelKeys';

export const formatDataFromApiForMediaModel = async (url, list, genre) => {
  try {
    const initialApiData = await axios.get(`${API_URL}${url}`);
    let initialData;

    if (list) {
      const data = await Promise.all(initialApiData.data.items);
      initialData = data;
    }
    if (!list) {
      const data = await Promise.all(initialApiData.data.results);
      initialData = data;
    }

    const collectionDataPromise = initialData.map((result) => {
      const tvOrMovie = result.original_name ? 'tv' : 'movie';
      const mediaCollectionData = axios.get(
        `${API_URL}/${tvOrMovie}/${result.id}${COLLECTION_URL}`
      );
      return mediaCollectionData;
    });
    const collectionData = await Promise.all(collectionDataPromise);

    const formattedDataPromise = collectionData.map((result) => {
      const data = result.data;
      return matchApiDataValuesToModelKeys({ ...data, genre });
    });
    const formattedData = await Promise.all(formattedDataPromise);

    return formattedData;
  } catch (error) {
    console.log('ERROR in Format Data From API:', error);
  }
};
