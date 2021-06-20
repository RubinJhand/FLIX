import { genreUrls } from '../../constants';
import { formatDataFromApiForMediaModel } from './formatDataFromApiForMediaModel';

export const newMediaModelData = async () => {
  try {
    const mediaModelDataPromise = genreUrls.map((value) => {
      const tableData = formatDataFromApiForMediaModel(
        value.url,
        value.list,
        value.genre
      );

      return tableData;
    });
    const mediaModelData = await Promise.all(mediaModelDataPromise);

    return mediaModelData.flat();
  } catch (error) {
    console.log('Error New Media Model Data:', error);
  }
};
