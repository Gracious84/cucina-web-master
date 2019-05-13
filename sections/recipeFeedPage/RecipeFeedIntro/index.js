import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from '../../../components/RecipeCard';
import RecipeInfoCard from '../../../components/RecipeInfoCard';
import VideoThumbnail from '../../../components/VideoThumbnail';

import { StyledIntro } from './style';

import routes from '../../../utils/helpers/routes';
import { recipeDataHandler } from '../../../utils/dataHandlers/recipe';

const RecipeFeedIntro = ({ recipe }) => {
  const handledData = recipeDataHandler(recipe);

  const { id, recipeInfo, recipeOwner, recipeVideo } = handledData;

  return (
    <StyledIntro>
      <div className="desktopVersion">
        <div className="recipeFeedIntroRow">
          <div className="recipeFeedIntrothumbnail">
            <VideoThumbnail
              thumbnailImageSrc={recipeVideo.thumbnail}
              authorName={recipeOwner.username}
              videoUrl={recipeVideo.link}
              isLazyLoaded
            />
          </div>

          <div className="recipeFeedIntroCard">
            <RecipeInfoCard
              title={recipeInfo.title}
              description={recipeInfo.description}
              link={routes.recipe.url(id)}
              asUrl={routes.recipe.mask(recipeInfo.title, id)}
            />
          </div>
        </div>
      </div>

      <div className="mobileVersion">
        <div className="recipeFeedIntroBorder">
          <img src="/static/images/frames/l-centred.svg" alt="border" />
        </div>

        <h2 className="recipeFeedIntroTitle">{recipeInfo.title}</h2>

        <div className="recipeFeedIntroCardWrapper">
          <div className="recipeFeedIntroCard">
            <RecipeCard
              title={recipeInfo.title}
              thumbnailImageSrc={recipeVideo.thumbnail}
              authorName={recipeOwner.username}
              videoUrl={recipeVideo.link}
              link={routes.recipe.url(id)}
              asUrl={routes.recipe.mask(recipeInfo.title, id)}
            />
          </div>
        </div>

        {/* }
      <div className="recipeFeedIntroBorder">
        <img src="/static/images/frames/l-centred.svg" alt="border" />
      </div>
      { */}
      </div>
    </StyledIntro>
  );
};
RecipeFeedIntro.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeFeedIntro;
