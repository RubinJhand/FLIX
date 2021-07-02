import { formatDatafromApiForMediaModel } from '../helpers';

export const searchService = async (url) => {
  const formattedSearchData = await formatDatafromApiForMediaModel(
    url,
    false,
    'search'
  );

  return formattedSearchData;
};
