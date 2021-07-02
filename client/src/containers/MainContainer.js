import React from 'react';

// Hooks and Contexts
import useApiData from '../hooks/useApiData';

// Components
import Main from '../components/main/Main';
import CardContainer from './CardContainer';

const MainContainer = () => {
  const [results, setUrl] = useApiData();

  return (
    <Main>
      <Main.Grid>
        {results?.data?.map(
          (result, index) =>
            result.backdrop_url && (
              <CardContainer
                key={result.tmdb_id}
                result={result}
                index={index}
                setUrl={setUrl}
              />
            )
        )}
      </Main.Grid>
    </Main>
  );
};

export default MainContainer;
