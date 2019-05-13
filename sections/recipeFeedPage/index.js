import React from 'react';
import { Query } from 'react-apollo';

import RecipeFeedIntro from './RecipeFeedIntro';
import RecipeFeedSpecialSlider from './RecipeFeedSpecialSlider';
import RecipesGallery from './RecipesGallery';

import Loading from '../../components/Loading';

import { GET_RECIPES_QUERY } from '../../utils/apollo/apolloQueries';

const Index = () => (
  <Query query={GET_RECIPES_QUERY}>
    {({ loading, error, data }) => {
      if (error) {
        return <p>error</p>;
      }

      if (loading) {
        return <Loading />;
      }

      console.log(data);
      return (
        <>
          <RecipeFeedIntro recipe={data.recipes.results[0]} />

          {/* }
          <RecipeFeedSpecialSlider />
          { */}

          <RecipesGallery recipes={data.recipes.results.slice(1)} />
        </>
      );
    }}
  </Query>
);

export default Index;
