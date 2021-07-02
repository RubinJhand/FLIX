import React from 'react';

// Hooks and Contexts
import { useApiData } from '../hooks/useApiData';

// Components
import Main from '../components/main/Main';
import CardContainer from './CardContainer';
import SlidesContainer from './SlidesContainer';

const MainContainer = () => {
  const [results] = useApiData();

  return (
    <Main>
      {!results.isLoading && <SlidesContainer />}
      <Main.Grid>
        <CardContainer results={results} />
      </Main.Grid>
    </Main>
  );
};

export default MainContainer;
