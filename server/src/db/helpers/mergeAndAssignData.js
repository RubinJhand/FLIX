import { getRawData } from './getData.js';
import { getVideoUrl } from './getVideoUrl.js';
import { setConsistentData } from './setConsistentData.js';

export const mergeAndAssignData = (url, genre) => {
  let mergedData = [];

  const placeholderForPromise = getRawData(url)
    .then((data) => {
      data?.map((value) => {
        let youTubeKey;
        const tvOrMovie = value.original_name ? 'tv' : 'movie';

        getVideoUrl(tvOrMovie, value.id)
          .then((vidUrl) => {
            return (youTubeKey = vidUrl);
          })
          .catch((error) => console.log(error));

        mergedData.push(setConsistentData({ ...value, youTubeKey, genre }));
      });
    })
    .catch((error) => console.log(error));

  return Promise.all([placeholderForPromise])
    .then((response) => mergedData)
    .catch((error) => console.log(error));
};
