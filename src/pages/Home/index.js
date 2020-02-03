import React from 'react';
import withRoot from '../../withRoot';
import AppFooter from '../../views/AppFooter';
import PrimarySearchAppBar from '../../views/PrimarySearchAppBar';
import UserTable from '../../views/UserTable';
import Hero from '../../views/Hero';

const Home = () => {
  return (
    <React.Fragment>
      <PrimarySearchAppBar />
      <Hero />
      <UserTable />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);