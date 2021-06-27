import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ApiDataProvider } from './contexts/apiDataContext';
import { MediaTypeProvider } from './contexts/mediaTypeContext';
import HeaderContainer from './containers/HeaderContainer';

const App = () => {
  return (
    <>
      <ApiDataProvider>
        <MediaTypeProvider>
          <HeaderContainer />
        </MediaTypeProvider>
        <Switch>
          <Route exact path='/'>
            {/* Main */}
          </Route>
          <Route exact path='/tv/:genre'>
            {/* Carousel */}
            {/* Main */}
          </Route>
          <Route exact path='/movie/:genre'>
            {/* Carousel */}
            {/* Main */}
          </Route>
        </Switch>
      </ApiDataProvider>
    </>
  );
};

export default App;
