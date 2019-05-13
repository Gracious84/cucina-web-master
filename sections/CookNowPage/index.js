import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import CookNowDesktop from './CookNowDesktop';
import CookNowMobile from './CookNowMobile';

import Loading from '../../components/Loading';

import { GET_RECIPE_QUERY } from '../../utils/apollo/apolloQueries';
import { recipeDataHandler } from '../../utils/dataHandlers/recipe';

import { StyledCookNow } from './style';

const CookNowPage = props => {
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
          <StyledCookNow>
            <div className="cookNowDesktop">
              <div className="cookNowDesktopInner">
                <CookNowDesktop recipeData={handledData} />
              </div>
            </div>

            <div className="cookNowMobile">
              <CookNowMobile recipeData={handledData} />
            </div>
          </StyledCookNow>
        );
      }}
    </Query>
  );
};

CookNowPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CookNowPage;
