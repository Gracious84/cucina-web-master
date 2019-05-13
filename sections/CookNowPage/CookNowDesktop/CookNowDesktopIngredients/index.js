import React from 'react';
import PropTypes from 'prop-types';

import IngredientsList from '../../../../components/IngredientsList';
import IconButton from '../../../../components/IconButton';

import { StyledIngredients } from './style';

import { icons } from '../../../../utils/ui/icons';

const CookNowDesktopIngredients = ({ ingredients, toggleShowIngredients }) => (
  <StyledIngredients>
    <div className="cookNowDesktopIngredientsHead">
      <IconButton onClick={toggleShowIngredients} iconSrc={icons.close} />

      <h1 className="cookNowDesktopIngredientsTitle">Ingredients</h1>

      <IconButton iconSrc={icons.share} />
    </div>

    <div className="cookNowDesktopIngredientsList">
      <IngredientsList ingredients={ingredients} itemsSpacing={24} />
    </div>
  </StyledIngredients>
);

CookNowDesktopIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  toggleShowIngredients: PropTypes.func.isRequired,
};

export default CookNowDesktopIngredients;
