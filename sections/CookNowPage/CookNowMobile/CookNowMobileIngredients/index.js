import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../../../components/IconButton';
import IngredientsList from '../../../../components/IngredientsList';

import { StyledIngredients } from './style';

import { icons } from '../../../../utils/ui/icons';

const CookNowMobileIngredients = props => {
  const { recipeIngredients, toggleIngredients } = props;

  return (
    <StyledIngredients>
      <div className="cookNowMobileIngredientsHead">
        <IconButton onClick={toggleIngredients} iconSrc={icons.close} />

        <h1 className="cookNowMobileIngredientsTitle">Ingredients</h1>

        <IconButton iconSrc={icons.share} />
      </div>

      <div className="cookNowMobileIngredientsList">
        <IngredientsList
          ingredients={recipeIngredients}
          itemsSpacing={0}
          itemClassName="cookNowMobileIngredientItem"
        />
      </div>
    </StyledIngredients>
  );
};

CookNowMobileIngredients.propTypes = {
  recipeIngredients: PropTypes.array.isRequired,
  toggleIngredients: PropTypes.func.isRequired,
};

export default CookNowMobileIngredients;
