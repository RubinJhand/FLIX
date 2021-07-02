import { formatDataFromApiForMediaModel } from '../helpers';

export const recommendationService = async (url) => {
  const formattedSearchData = await formatDataFromApiForMediaModel(
    url,
    false,
    'recommendations'
  );

  return formattedSearchData;
};
