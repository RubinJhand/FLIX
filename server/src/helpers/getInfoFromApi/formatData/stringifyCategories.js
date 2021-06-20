export const stringifyCategories = (results) => {
  const categories = results.genres;
  let categoryArray = [];

  categories.map((result, index) => {
    categoryArray.push(`${result.name}`);
  });

  if (categoryArray.length > 1)
    return categoryArray.join(' | ').trim().toUpperCase();
  return categoryArray.join('').trim().toUpperCase();
};
