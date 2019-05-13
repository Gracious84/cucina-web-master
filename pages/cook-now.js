import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import CookNowPage from '../sections/CookNowPage';

const CookNow = props => {
  const { router } = props;

  return <CookNowPage id={router.query.id} />;
};

CookNow.propTypes = {
  router: PropTypes.object,
};

export default withRouter(CookNow);
