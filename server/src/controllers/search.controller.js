import { API_KEY } from '../constants';
import { searchService } from '../services';

export const searchController = async (req, res) => {
  const { search } = req.params;

  try {
    const url = `/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;

    const data = await searchService(url);

    console.log('Number of records from API:', data.length);

    return res.json({ data });
  } catch (error) {
    console.log('Search Error:', error);
  }
};
