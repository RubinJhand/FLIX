import { API_IMAGE_URL } from '../../../constants';

export const logoPath = (results, tv) => {
  const networkOrProduction = tv
    ? results.networks
    : results.production_companies;

  const filteredResults = networkOrProduction.filter((result) => {
    if (result.logo_path) return result.logo_path;
  });

  const firstLogoPathInArray = filteredResults.length
    ? `${API_IMAGE_URL}${filteredResults[0].logo_path}`
    : null;

  return firstLogoPathInArray;
};
