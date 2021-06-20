import axios from 'axios';

import {
  API_URL,
  VIDEO_KEY
} from '../../constants/externalAPI/externalAPIRoutes';

export const getVideoUrl = async (type, id) => {
  const youtubeKey = await axios
    .get(`${API_URL}/${type}/${id}/${VIDEO_KEY}`)
    .then((response) => {
      const data = response.data.results;
      let videoKey;

      data.map((value) => {
        if (value.type === 'Trailer') {
          videoKey = value.key;
        } else {
          videoKey = value.key;
        }
      });
      return videoKey;
    })
    .catch((error) => {
      console.log(error);
    });

  return youtubeKey;
};
