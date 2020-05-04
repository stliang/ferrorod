import React from 'react';
// import Nav from '../../../components/Nav'
import Router from '../Router';
import Hero from '../../../components/Hero';
import AppFooter from '../../../components/AppFooter';
import PrimarySearchAppBar from '../../../components/PrimarySearchAppBar';
// import POC from '../../scenes/POC';


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