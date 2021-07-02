import { API_KEY } from '../constants';
import { seasonService } from '../services/season.services';

export const seasonController = async (req, res) => {
  const { tv_id, season_num } = req.params;

  try {
    const url = `/tv/${tv_id}/season/${season_num}?api_key=${API_KEY}&language=en-US`;

    const data = await seasonService(url);

    console.log('Number of episodes from API:', data.episodes.length);

    return res.json({ data });
  } catch (error) {
    console.log('Seasons Error:', error);
  }
};
