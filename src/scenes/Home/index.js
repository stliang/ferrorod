import React from 'react';
import withRoot from '../../withRoot';
import AppFooter from '../../components/AppFooter';
import PrimarySearchAppBar from '../../components/PrimarySearchAppBar';
import Assets from '../Assets';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <React.Fragment>
      <PrimarySearchAppBar />
      <Hero />
      <Assets />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);