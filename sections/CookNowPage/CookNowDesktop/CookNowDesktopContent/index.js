import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';

import { StyledCookNowDesktopContent } from './style';

const CookNowDesktopContent = ({
  title,
  description,
  onViewIngredientsClick,
}) => (
  <StyledCookNowDesktopContent>
    <h1 className="cookNowDesktopContentTitle">{title}</h1>

    <p className="cookNowDesktopContentDescription">{description}</p>

    <div className="cookNowDesktopContentIngBtn">
      <Button
        buttonSize="large"
        buttonType="secondary"
        text="View ingredients"
        onClick={onViewIngredientsClick}
      />
    </div>
  </StyledCookNowDesktopContent>
);

CookNowDesktopContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onViewIngredientsClick: PropTypes.func.isRequired,
};

export default CookNowDesktopContent;
