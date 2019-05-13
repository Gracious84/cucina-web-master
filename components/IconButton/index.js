import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { StyledButton } from './style';

import { icons } from '../../utils/ui/icons';

const defaultIcon = icons.add;

class IconButton extends Component {
  handleClick = event => {
    const { onClick, to } = this.props;

    if (onClick) {
      onClick(event);
      return;
    }

    if (to) {
      Router.push(to);
    }
  };

  render() {
    const {
      buttonType,
      buttonSize,
      className,
      iconSrc,
      disabled,
      disabledIconSrc,
      title,
      ...restProps
    } = this.props;

    const icon = !disabled
      ? iconSrc || defaultIcon
      : disabledIconSrc || defaultIcon;

    return (
      <StyledButton
        className={className}
        buttonType={buttonType}
        buttonSize={buttonSize}
        disabled={disabled}
        onClick={this.handleClick}
        title={title}
        {...restProps}
      >
        {icon}
      </StyledButton>
    );
  }
}

IconButton.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  iconSrc: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  disabledIconSrc: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  title: '',
  buttonType: 'primary',
  buttonSize: 'medium',
};

export default IconButton;
