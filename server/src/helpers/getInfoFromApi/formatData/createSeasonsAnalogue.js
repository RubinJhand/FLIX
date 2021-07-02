import { API_IMAGE_URL } from '../../../constants';

export const createSeasonsAnalogue = (data) => {
  let episodeData = [];

  data.episodes.map((item) => {
    episodeData.push({
      air_date: item.air_date,
      episode_num: item.episode_number,
      id: item.id,
      name: item.name,
      overview: item.overview,
      season_num: item.season_number,
      still_url: item.still_path ? `${API_IMAGE_URL}${item.still_path}` : null
    });
  });

  const analogueData = {
    episodes: episodeData,
    title: data.name,
    season_num: data.season_number,
    poster_url: `${API_IMAGE_URL}${data.poster_path}`
  };

  return analogueData;
};
