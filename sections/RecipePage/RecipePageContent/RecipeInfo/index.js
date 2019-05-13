import React from 'react';
import PropTypes from 'prop-types';

import CookButton from '../../../../components/CookButton';
import IconButton from '../../../../components/IconButton';

import { StyledRecipeInfo } from './style';

import { icons } from '../../../../utils/ui/icons';

const RecipeInfo = props => {
  const { id, title, description } = props;

  return (
    <StyledRecipeInfo>
      <div className="row">
        <div className="left">
          <h1 className="title">{title}</h1>

          <p className="description">{description}</p>
          {/*
          <div className="actions">
            <IconButton
              buttonType="secondary"
              buttonSize="medium"
              iconSrc={icons.favoriteBorder}
              title="like"
              aria-label="like"
            />

            <IconButton
              buttonType="secondary"
              buttonSize="medium"
              iconSrc={icons.bookmarkBorder}
              title="bookmark"
              aria-label="bookmark"
            />

            <IconButton
              buttonType="secondary"
              buttonSize="medium"
              iconSrc={icons.share}
              title="share"
              aria-label="share"
            />

            <IconButton
              className="mediumUp"
              buttonType="secondary"
              buttonSize="medium"
              iconSrc={icons.print}
              title="print"
              aria-label="print"
            />
            </div>
          */}
        </div>
        <div className="right">
          <CookButton recipeId={id} recipeTitle={title} />
        </div>
      </div>
    </StyledRecipeInfo>
  );
};

RecipeInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeInfo;
