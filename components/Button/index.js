import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { StyledButton } from './style';

import { icons } from '../../utils/ui/icons';

const defaultIcon = icons.add;

class Button extends Component {
  handleClick = event => {
    const { onClick, to, asUrl } = this.props;

    if (onClick) {
      onClick(event);
      return;
    }

    if (to) {
      Router.push(to, asUrl);
    }
  };

  render() {
    const {
      buttonType,
      buttonSize,
      text,
      iconPosition,
      iconSrc,
      disabled,
      disabledIconSrc,
      type,
      ...restProps
    } = this.props;

    const icon = !disabled
      ? iconSrc || defaultIcon
      : disabledIconSrc || defaultIcon;

    return (
      <StyledButton
        buttonType={buttonType}
        buttonSize={buttonSize}
        iconPosition={iconPosition}
        disabled={disabled}
        type={type}
        onClick={this.handleClick}
        {...restProps}
      >
        {iconPosition && icon}

        <span>{text}</span>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.node,
  disabled: PropTypes.bool,
  disabledIconSrc: PropTypes.string,
  iconPosition: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  asUrl: PropTypes.string,
};

Button.defaultProps = {
  buttonType: 'primary',
  buttonSize: 'medium',
};

export default Button;
