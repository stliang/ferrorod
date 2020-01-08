import React from 'react';
import withRoot from '../../withRoot';
import AppFooter from '../../views/AppFooter';
import PrimarySearchAppBar from '../../views/PrimarySearchAppBar';
import UserTable from '../../poc/UserTable';

const Home = () => {
  return (
    <React.Fragment>
      {/* <PrimarySearchAppBar /> */}
      <UserTable />
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(Home);