import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Contexts
import { ApiDataProvider } from './contexts/apiDataContext';
import { MediaTypeProvider } from './contexts/mediaTypeContext';

// Containers
import HeaderContainer from './containers/HeaderContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  return (
    <>
      <ApiDataProvider>
        <MediaTypeProvider>
          <HeaderContainer />
          <Switch>
            <Route exact path='/'>
              <MainContainer />
            </Route>
            <Route exact path='/tv/:genre'>
              <MainContainer />
            </Route>
            <Route exact path='/movies/:genre'>
              <MainContainer />
            </Route>
          </Switch>
        </MediaTypeProvider>
      </ApiDataProvider>
    </>
  );
};

export default App;
