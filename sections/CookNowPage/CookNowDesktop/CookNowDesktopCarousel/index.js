import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledCarousel } from './style';

import { icons } from '../../../../utils/ui/icons';

class CookNowDesktopCarousel extends Component {
  next = () => {
    const { steps, activeIndex, setActiveIndex } = this.props;

    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  prev = () => {
    const { activeIndex, setActiveIndex } = this.props;

    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  handleWheel = event => {
    const { deltaY } = event;

    if (deltaY > 0) {
      this.next();
    } else {
      this.prev();
    }
  };

  render() {
    const { steps, activeIndex, setActiveIndex } = this.props;

    return (
      <StyledCarousel activeIndex={activeIndex} slidesCount={steps.length}>
        <div className="carouselInner">
          <div className="carouselList" onWheel={this.handleWheel}>
            <div className="carouselTrack">
              {steps.map((item, index) => (
                <div className="carouselImg" key={index}>
                  <img src={item.image} alt="recipe" />
                </div>
              ))}
            </div>
          </div>

          <div className="carouselControls">
            <button
              onClick={this.prev}
              type="button"
              className="carouselPrevBtn"
              disabled={activeIndex === 0}
            >
              {icons.upArrow}
            </button>

            <div className="carouselThumbList">
              {steps.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onKeyPress={() => setActiveIndex(index)}
                  tabIndex="0"
                  role="button"
                  className={`carouselThumbItem ${
                    index === activeIndex ? 'carouselThumbActive' : ''
                  }`}
                >
                  <img src={item.image} alt="recipe" />
                </div>
              ))}
            </div>

            <button
              onClick={this.next}
              type="button"
              className="carouselNextBtn"
              disabled={activeIndex === steps.length - 1}
            >
              {icons.downArrow}
            </button>
          </div>
        </div>
      </StyledCarousel>
    );
  }
}

CookNowDesktopCarousel.propTypes = {
  steps: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

export default CookNowDesktopCarousel;
