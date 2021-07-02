import { API_KEY } from '../constants';
import { recommendationService } from '../services';

export const recommendationController = async (req, res) => {
  const { mediaType, id } = req.params;

  try {
    const url = `/${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

    const data = await recommendationService(url);

    console.log('Number of records from API:', data.length);

    return res.json({ data });
  } catch (error) {
    console.log('Recommendation Error:', error);
  }
};
