import React from 'react';
import withRoot from '../../withRoot';
import Assets from '../Assets';

const Home = () => {
  return (
    <React.Fragment>
      <Assets />
    </React.Fragment>
  );
}

export default withRoot(Home);