import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import BorderedSubSection from '../../../../components/BorderedSubSection';

import { StyledSection } from './style';

const RecipeHowToCook = props => {
  const { data } = props;

  return (
    <StyledSection>
      <BorderedSubSection title="Procedimento">
        {data.map(({ description, image }, index, arr) => {
          const stepNumber = `Passaggio ${index + 1} di ${arr.length}`;

          return (
            <div className="cookStep" key={index}>
              <div className="cookStepThumbnail">
                <LazyLoadImage src={image} alt="recipe step" />
              </div>

              <div className="cookStepText">
                <div className="cookStepTitle">{stepNumber}</div>

                <div className="cookStepDescription">{description}</div>
              </div>
            </div>
          );
        })}
      </BorderedSubSection>
    </StyledSection>
  );
};

RecipeHowToCook.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RecipeHowToCook;
