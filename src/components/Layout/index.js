import React from 'react';
import Nav from '../Nav'
import Router from '../Router';
import Hero from '../Hero';
import AppFooter from '../AppFooter';
import PrimarySearchAppBar from '../PrimarySearchAppBar';

const Layout = (props) => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Hero />
      <Router />
      <AppFooter />
    </div>
  );
}

export default Layout;