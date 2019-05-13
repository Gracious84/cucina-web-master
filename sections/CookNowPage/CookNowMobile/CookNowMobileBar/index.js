import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../../../components/IconButton';

import { StyledBar } from './style';

import { icons } from '../../../../utils/ui/icons';

const CookNowMobileBar = props => {
  const { onStepsEnd, toggleIngredients, title } = props;

  return (
    <StyledBar>
      <IconButton
        buttonSize="medium"
        buttonType="secondary"
        iconSrc={icons.close}
        onClick={onStepsEnd}
      />

      <h2 className="cookNowMobileBottomBarTitle">{title}</h2>

      <IconButton
        buttonSize="medium"
        buttonType="secondary"
        iconSrc={icons.shoppingBasket}
        onClick={toggleIngredients}
      />
    </StyledBar>
  );
};

CookNowMobileBar.propTypes = {
  onStepsEnd: PropTypes.func.isRequired,
  toggleIngredients: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CookNowMobileBar;
