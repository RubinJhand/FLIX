import { searchService } from '../services';

export const search = async (req, res) => {
  try {
    const { search } = req.params;
    const data = await searchService(search);

    return res.json({ data });
  } catch (error) {
    console.log('Search Error:', error);
  }
};
