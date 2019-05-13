import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import CookNowDesktopCarousel from './CookNowDesktopCarousel';
import CookNowDesktopContent from './CookNowDesktopContent';
import CookNowDesktopIngredients from './CookNowDesktopIngredients';

import IconButton from '../../../components/IconButton';

import { StyledCookNowDesktop } from './style';

import { icons } from '../../../utils/ui/icons';
import routes from '../../../utils/helpers/routes';

class CookNowDesktop extends Component {
  state = {
    activeStepIndex: 0,
    showIngredients: false,
  };

  setActiveIndex = index => {
    this.setState({
      activeStepIndex: index,
    });
  };

  toggleShowIngredients = () => {
    this.setState(prevState => ({
      showIngredients: !prevState.showIngredients,
    }));
  };

  handleClose = () => {
    const { recipeData } = this.props;
    const { id, recipeInfo } = recipeData;

    const { recipe: recipeRoute } = routes;

    Router.push(recipeRoute.url(id), recipeRoute.mask(recipeInfo.title, id));
  };

  render() {
    const { recipeData } = this.props;
    const { activeStepIndex, showIngredients } = this.state;

    const { recipeSteps, recipeIngredients } = recipeData;

    return (
      <StyledCookNowDesktop>
        <div className="cookNowDesktopInner">
          <div className="cookNowDesktopCarousel">
            <CookNowDesktopCarousel
              activeIndex={activeStepIndex}
              steps={recipeSteps}
              setActiveIndex={this.setActiveIndex}
            />
          </div>

          <div className="cookNowDesktopText">
            <div className="cookNowDesktopTextBorder">
              <img src="/static/images/frames/l-centred.svg" alt="border" />
            </div>

            <div className="cookNowDesktopTextInner">
              {showIngredients ? (
                <CookNowDesktopIngredients
                  ingredients={recipeIngredients}
                  toggleShowIngredients={this.toggleShowIngredients}
                />
              ) : (
                <CookNowDesktopContent
                  title={`Passaggio ${activeStepIndex + 1} di ${
                    recipeSteps.length
                  }`}
                  description={recipeSteps[activeStepIndex].description}
                  onViewIngredientsClick={this.toggleShowIngredients}
                />
              )}
            </div>

            <div className="cookNowDesktopTextBorder">
              <img src="/static/images/frames/l-centred.svg" alt="border" />
            </div>
          </div>

          <div className="cookNowDesktopCloseBtn">
            <IconButton onClick={this.handleClose} iconSrc={icons.close} />
          </div>
        </div>
      </StyledCookNowDesktop>
    );
  }
}

CookNowDesktop.propTypes = {
  recipeData: PropTypes.object.isRequired,
};

export default CookNowDesktop;
