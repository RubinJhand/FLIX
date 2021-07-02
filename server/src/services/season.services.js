import { formatSeasonsData } from '../helpers';

export const seasonService = async (url) => {
  const formattedDetailsData = await formatSeasonsData(url);

  return formattedDetailsData;
};
