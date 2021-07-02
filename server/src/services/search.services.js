import { formatDataFromApiForMediaModel } from '../helpers';

export const searchService = async (url) => {
  const formattedSearchData = await formatDataFromApiForMediaModel(
    url,
    false,
    'search'
  );

  return formattedSearchData;
};
