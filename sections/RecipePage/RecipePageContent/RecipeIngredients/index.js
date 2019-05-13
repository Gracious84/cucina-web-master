import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BorderedSubSection from '../../../../components/BorderedSubSection';
import Button from '../../../../components/Button';
import IconButton from '../../../../components/IconButton';
import UnitSwitchButton from '../../../../components/UnitSwitchButton';

import { StyledIngredients } from './style';
import IngredientsList from '../../../../components/IngredientsList';

// const shoppingListCount = ingredients.filter(item => item.added).length;

class RecipeIngredients extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    servings: 1,
  };

  handleServingsIncrement = () => {
    this.setState(({ servings }) => ({
      servings: servings + 1,
    }));
  };

  handleServingsDecrement = () => {
    const { servings } = this.state;

    if (servings > 1) {
      this.setState(state => ({
        servings: state.servings - 1,
      }));
    }
  };

  render() {
    // const { servings } = this.state;
    const { data } = this.props;

    return (
      <StyledIngredients>
        <BorderedSubSection title="Ingredienti">
          {/*
          <div className="ingredientsHead">
            {/* <div className="servings">
              <span>
                {`${servings} `}
                servings
              </span>

              <IconButton
                buttonType="secondary"
                buttonSize="medium"
                iconSrc={icons.add}
                onClick={this.handleServingsIncrement}
                aria-label="increment servings"
              />

              <IconButton
                buttonType="secondary"
                buttonSize="medium"
                iconSrc={icons.minus}
                onClick={this.handleServingsDecrement}
                aria-label="decrement servings"
              />
            </div>

            <div className="measurement">
              <span>Measurement</span>

              <div className="measurementSwitch">
                <UnitSwitchButton />
              </div>
            </div>

          </div>
          */}
          <div className="ingredientsListWrapper">
            <IngredientsList ingredients={data} />
          </div>

          {/*
          <div className="shoppingListBtn">
            <Button text={`View shopping list (${shoppingListCount})`} />
          </div>
                 */}
        </BorderedSubSection>
      </StyledIngredients>
    );
  }
}

export default RecipeIngredients;
