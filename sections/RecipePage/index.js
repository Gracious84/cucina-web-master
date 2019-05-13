import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import RecipePageIntro from './RecipePageIntro';
import RecipePageContent from './RecipePageContent';
import SeoHead from './SeoHead';

import Loading from '../../components/Loading';

import { GET_RECIPE_QUERY } from '../../utils/apollo/apolloQueries';
import { recipeDataHandler } from '../../utils/dataHandlers/recipe';

const RecipePage = props => {
  const { id } = props;

  return (
    <Query query={GET_RECIPE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) {
          return <p>error</p>;
        }

        if (loading) {
          return <Loading />;
        }

        const handledData = recipeDataHandler(data.recipe);

        return (
          <>
            <SeoHead recipe={handledData} />

            <RecipePageIntro data={handledData} />

            <RecipePageContent data={handledData} />
          </>
        );
      }}
    </Query>
  );
};

RecipePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RecipePage;
