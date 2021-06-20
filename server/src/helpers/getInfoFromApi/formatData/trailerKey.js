export const trailerKey = (results) => {
  const videoInfo = results.videos.results;

  const youtubeKeyArray = videoInfo.filter((result, index) => {
    if (result.site === 'YouTube') {
      if (result.type === 'Trailer') return result.key;
      if (result.length - 1 === index) return result.key;
    }
  });

  const firstYoutubeKeyInArray = youtubeKeyArray.length
    ? youtubeKeyArray[0].key
    : null;

  return firstYoutubeKeyInArray;
};
