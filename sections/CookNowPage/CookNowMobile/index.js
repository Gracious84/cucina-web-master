import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import CookNowMobileCarousel from './CookNowMobileCarousel';
import CookNowMobileIngredients from './CookNowMobileIngredients';
import CookNowMobileModals from './CookNowMobileModals';
import CookNowMobileBar from './CookNowMobileBar';

import { StyledCookNowMobile } from './style';

import routes from '../../../utils/helpers/routes';

class CookNowMobile extends Component {
  static propTypes = {
    recipeData: PropTypes.object.isRequired,
  };

  state = {
    activeIndex: 0,
    showIngredients: false,
    showModal: false,
  };

  setActiveIndex = index => {
    this.setState({
      activeIndex: index,
    });
  };

  toggleIngredients = () => {
    this.setState(state => ({
      showIngredients: !state.showIngredients,
    }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleClose = () => {
    const { recipeData } = this.props;
    const { id, recipeInfo } = recipeData;

    const { recipe: recipeRoute } = routes;

    Router.replace(recipeRoute.url(id), recipeRoute.mask(recipeInfo.title, id));
  };

  render() {
    const { recipeData } = this.props;
    const { activeIndex, showModal, showIngredients } = this.state;

    const { recipeSteps, recipeIngredients } = recipeData;

    return (
      <StyledCookNowMobile>
        {!showIngredients && (
          <div className="cookNowMobileMain">
            <div className="cookNowMobileCarousel">
              <CookNowMobileCarousel
                recipeData={recipeData}
                initialSlide={activeIndex}
                onStepChange={this.setActiveIndex}
              />
            </div>

            <div className="cookNowMobileBottomBar">
              <CookNowMobileBar
                title={`Passaggio ${activeIndex + 1} di ${recipeSteps.length}`}
                onStepsEnd={this.toggleModal}
                toggleIngredients={this.toggleIngredients}
              />
            </div>
          </div>
        )}

        {showIngredients && (
          <div>
            <CookNowMobileIngredients
              toggleIngredients={this.toggleIngredients}
              recipeIngredients={recipeIngredients}
            />
          </div>
        )}

        {showModal && (
          <div className="cookNowMobileModals">
            <CookNowMobileModals
              onModalClose={this.toggleModal}
              onCookNowClose={this.handleClose}
            />
          </div>
        )}
      </StyledCookNowMobile>
    );
  }
}

export default CookNowMobile;
