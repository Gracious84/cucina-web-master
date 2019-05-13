import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import IconButton from '../IconButton';

import { StyledCard } from './style';

import { icons } from '../../utils/ui/icons';

const RecipeInfoCard = props => {
  const { title, description, link, asUrl } = props;

  return (
    <StyledCard>
      <div className="recipeInfoCardInner">
        <h1 className="recipeInfoCardTitle">{title}</h1>

        <p className="recipeInfoCardDescription">{description}</p>

        <div className="recipeInfoCardButtons">
          <div className="recipeInfoCardMainButton">
            <Button
              buttonType="primary"
              buttonSize="large"
              text="Vai alla Ricetta"
              to={link}
              asUrl={asUrl}
              aria-label="view recipe"
            />
          </div>

          <div className="recipeInfoCardActionButtons">
            <IconButton
              iconSrc={icons.bookmarkBorder}
              buttonType="secondary"
              buttonSize="medium"
              aria-label="bookmark"
            />

            <IconButton
              iconSrc={icons.share}
              buttonType="secondary"
              buttonSize="medium"
              aria-label="share"
            />
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

RecipeInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  asUrl: PropTypes.string.isRequired,
};

export default RecipeInfoCard;
