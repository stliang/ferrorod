import React from 'react';
import Nav from '../Nav'
import Router from '../Router';
import Hero from '../Hero';
import AppFooter from '../AppFooter';
import PrimarySearchAppBar from '../PrimarySearchAppBar';
import POC from '../../scenes/POC';


const Layout = (props) => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Hero />
      {/* <Router /> */}
      <POC />
      <AppFooter />
    </div>
  );
}

export default Layout;