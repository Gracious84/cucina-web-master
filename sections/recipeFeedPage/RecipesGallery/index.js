import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from '../../../components/RecipeCard';

import { StyledGallery } from './style';

import routes from '../../../utils/helpers/routes';
import { recipeDataHandler } from '../../../utils/dataHandlers/recipe';

const getCardColumnClassName = index => {
  let cardColumn;

  if (index < 4) {
    cardColumn = 'recipesGalleryCard--2';
  } else if (index >= 4 && index < 10) {
    cardColumn = 'recipesGalleryCard--3';
  } else {
    cardColumn = 'recipesGalleryCard--4';
  }

  return cardColumn;
};

const RecipesGallery = ({ recipes }) => {
  const handledData = recipes.map(recipe => recipeDataHandler(recipe));

  return (
    <StyledGallery>
      <div className="recipesGalleryBorder">
        <img src="/static/images/frames/l-centred.svg" alt="border" />
      </div>

      <h2 className="recipesGalleryTitle">Recipes</h2>

      <div className="recipesGallery">
        {handledData.map((recipe, index) => {
          const { id, recipeInfo, recipeOwner, recipeVideo } = recipe;

          return (
            <div
              className={`recipesGalleryCard ${getCardColumnClassName(index)}`}
              key={id}
            >
              <RecipeCard
                thumbnailImageSrc={recipeVideo.thumbnail}
                title={recipeInfo.title}
                authorName={recipeOwner.username}
                link={routes.recipe.url(id)}
                asUrl={routes.recipe.mask(recipeInfo.title, id)}
                videoUrl={recipeVideo.link}
                isLazyLoaded
              />
            </div>
          );
        })}
      </div>

      <div className="recipesGalleryBorder">
        <img src="/static/images/frames/l-centred.svg" alt="border" />
      </div>
    </StyledGallery>
  );
};

RecipesGallery.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipesGallery;
