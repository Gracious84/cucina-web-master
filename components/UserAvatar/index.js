import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { Wrapper } from './style';

class UserAvatar extends Component {
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
    const { avatar, userNameAbbr, small } = this.props;

    return (
      <Wrapper onClick={this.handleClick} small={small}>
        {avatar || <span>{userNameAbbr}</span>}
      </Wrapper>
    );
  }
}

UserAvatar.propTypes = {
  avatar: PropTypes.node,
  userNameAbbr: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default UserAvatar;
