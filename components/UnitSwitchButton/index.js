import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './style';

class UnitSwitchButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
  };

  state = {
    selectedUnit: 'imperial',
  };

  handleClick = value => {
    const { onClick } = this.props;

    this.setState(
      {
        selectedUnit: value,
      },
      () => {
        if (typeof onClick === 'function') {
          onClick(value);
        }
      }
    );
  };

  render() {
    const { selectedUnit } = this.state;

    return (
      <StyledButton unit={selectedUnit}>
        <button
          className="metrics"
          type="button"
          onClick={() => this.handleClick('metrics')}
          aria-label="Switch to metrics"
        >
          Metrics
        </button>

        <button
          className="imperial"
          type="button"
          onClick={() => this.handleClick('imperial')}
          aria-label="Switch to imperial"
        >
          Imperial
        </button>
      </StyledButton>
    );
  }
}

export default UnitSwitchButton;
