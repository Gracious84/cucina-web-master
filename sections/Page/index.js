import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';

import { Normalize } from 'styled-normalize';

import { StyledContent } from './style';

import Meta from '../../components/Meta';

import '../../static/css/global.css';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Page = ({ children }) => (
  <>
    <Meta />

    <Normalize />

    <StyledContent>{children}</StyledContent>
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
