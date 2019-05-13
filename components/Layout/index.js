import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

import { StyledContent } from './style';

const Layout = ({ children }) => (
  <>
    <NavigationBar />

    <StyledContent>{children}</StyledContent>

    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
