import { genreList } from '../../constants/externalAPI/genreList.js';
import { mergeAndAssignData } from './mergeAndAssignData.js';

export const mapGenres = () => {
  let allMediaData = [];

  const fullList = genreList.map(async (value) => {
    await mergeAndAssignData(value.url, value.genre)
      .then((data) => {
        allMediaData.push(...data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return Promise.all(fullList)
    .then((response) => allMediaData)
    .catch((error) => console.log(error));
};
