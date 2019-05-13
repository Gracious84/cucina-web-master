import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { StyledButton } from './style';

import routes from '../../utils/helpers/routes';

const CookButton = props => {
  const { recipeId, recipeTitle } = props;

  return (
    <StyledButton>
      <Link
        href={routes.cookNow.url(recipeId)}
        as={routes.cookNow.mask(recipeTitle, recipeId)}
      >
        <a>
          <img src="/static/images/icons/icon-chef.svg" alt="icon" />
          <span>Cook now!</span>
        </a>
      </Link>
    </StyledButton>
  );
};

CookButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
};

export default CookButton;
