import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import RecipePage from '../sections/RecipePage';

import Layout from '../components/Layout';

const Recipe = props => {
  const { router } = props;

  return (
    <Layout>
      <RecipePage id={router.query.id} />;
    </Layout>
  );
};

Recipe.propTypes = {
  router: PropTypes.object,
};

export default withRouter(Recipe);
