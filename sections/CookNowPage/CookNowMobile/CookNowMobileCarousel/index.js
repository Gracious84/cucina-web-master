import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from '../../../../components/Carousel';

import { StyledCarousel } from './style';

class CookNowMobileCarousel extends Component {
  render() {
    const {
      recipeData: { recipeSteps },
      initialSlide,
      onStepChange,
    } = this.props;

    const sliderSettings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 12,
      adaptiveHeight: true,
      fade: false,
      autoplay: true,
      speed: 2000,
      initialSlide,
      beforeChange: (_, index) => {
        onStepChange(index);
      },
      // prevArrow: <PrevArrow>{icons.prevArrow}</PrevArrow>,
      // nextArrow: <NexttArrow>{icons.nextArrow}</NexttArrow>,
    };

    return (
      <StyledCarousel>
        <Carousel sliderSettings={sliderSettings}>
          {recipeSteps.map((step, index) => (
            <div className="cookNowMobileSlide" key={index}>
              <div className="cookNowMobileSlideImg">
                <img src={step.image} alt="recipe step" />
              </div>

              <div className="cookNowMobileSlideText">
                <div className="cookNowMobileTextBorder">
                  <img src="/static/images/frames/l-centred.svg" alt="border" />
                </div>

                <p className="cookNowMobileSlideTextContent">
                  {step.description}
                </p>

                <div className="cookNowMobileTextBorder">
                  <img src="/static/images/frames/l-centred.svg" alt="border" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </StyledCarousel>
    );
  }
}

CookNowMobileCarousel.propTypes = {
  recipeData: PropTypes.object.isRequired,
  initialSlide: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default CookNowMobileCarousel;
