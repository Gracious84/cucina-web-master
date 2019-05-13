import React from 'react';
import PropTypes from 'prop-types';
import { Link, Element } from 'react-scroll';

import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeHowToCook from './RecipeHowToCook';
import RecipeComments from './RecipeComments';

import { StyledContent } from './style';
import { StyledNav } from '../../../components/StyledComponents/StyledNav';

const RecipePageContent = props => {
  const { data } = props;

  const { id, recipeInfo, recipeIngredients, recipeSteps } = data;

  return (
    <StyledContent>
      <div className="recipeNavHead">
        <StyledNav>
          <div className="recipeNavList">
            <Link
              className="recipeNavItem"
              activeClass="recipeNavItem--active"
              to="introduzione"
              offset={-112}
              spy
              smooth
            >
              Introduzione
            </Link>

            <Link
              className="recipeNavItem"
              activeClass="recipeNavItem--active"
              to="procedimento"
              offset={-112}
              spy
              smooth
            >
              Procedimento
            </Link>

            {/* }
            <Link
              className="recipeNavItem"
              activeClass="recipeNavItem--active"
              to="commenti"
              offset={-112}
              smooth
              spy
            >
              Commenti
            </Link>
            { */}
          </div>
        </StyledNav>
      </div>

      <div className="recipePageMainContent">
        <Element className="recipeInfo" name="introduzione">
          <RecipeInfo
            id={id}
            title={recipeInfo.title}
            description={recipeInfo.description}
          />

          <div className="recipeIngredients">
            <RecipeIngredients data={recipeIngredients} />
          </div>
        </Element>

        <Element className="recipeHowToCook" name="procedimento">
          <RecipeHowToCook data={recipeSteps} />
        </Element>

        {/* }
        <Element className="recipeComments" name="commenti">
          <RecipeComments />
        </Element>
        { */}
      </div>
    </StyledContent>
  );
};

RecipePageContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipePageContent;
