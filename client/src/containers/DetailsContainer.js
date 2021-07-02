import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import Details from '../components/details/Details';
import MainContainer from '../containers/MainContainer';

const DetailsContainer = ({ location }) => {
  return (
    <>
      <Details>
        <Details.Heading>Recommendations For:</Details.Heading>
        <Details.Heading>{location.state}</Details.Heading>
      </Details>
      <MainContainer />
    </>
  );
};

export default withRouter(DetailsContainer);
