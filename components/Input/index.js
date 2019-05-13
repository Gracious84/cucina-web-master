import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './style';

class Input extends Component {
  render() {
    const {
      filled,
      inputSize,
      iconPosition,
      iconSrc,
      disabled,
      type,
      placeholder,
      onChange,
      ...restProps
    } = this.props;

    return (
      <StyledInput
        filled={filled}
        inputSize={inputSize}
        iconPosition={iconPosition}
      >
        {iconPosition && <img src={iconSrc} alt="icon" />}

        <input
          type={type}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          {...restProps}
        />
      </StyledInput>
    );
  }
}

Input.propTypes = {
  filled: PropTypes.bool,
  inputSize: PropTypes.oneOf(['small', 'medium', 'large']),
  iconSrc: PropTypes.string,
  disabled: PropTypes.bool,
  iconPosition: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  filled: false,
  inputSize: 'medium',
};

export default Input;
