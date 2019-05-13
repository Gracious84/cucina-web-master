import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './style';

const IngredientsList = ({ ingredients, itemsSpacing, itemClassName }) => (
  <StyledList itemsSpacing={itemsSpacing}>
    {ingredients.map(({ id, label, quantity, unit }) => (
      <div className={`ingredientItem ${itemClassName}`} key={id}>
        {/*
      <IconButton
        buttonType="secondary"
        buttonSize="medium"
        iconSrc={icons.check}
        aria-label="check ingredient"
      />
       */}
        <div className="ingredientMeasurment">{`${quantity || ''} ${unit ||
          ''}`}</div>

        <div className="ingredientDescription">{label}</div>
      </div>
    ))}
  </StyledList>
);

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  itemsSpacing: PropTypes.number,
  itemClassName: PropTypes.string,
};

IngredientsList.defaultProps = {
  itemsSpacing: 16,
};

export default IngredientsList;
