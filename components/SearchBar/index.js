import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledLabel } from './styles';

import { icons } from '../../utils/ui/icons';

class SearchBar extends Component {
  handleChange = event => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  render() {
    return (
      <StyledLabel>
        {icons.search}

        <StyledInput
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </StyledLabel>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
