import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import UserAvatar from '../UserAvatar';

import { StyledAvatarInput } from './style';

class AvatarInput extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    userAvatarSrc: PropTypes.string.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    const { value } = event.target;

    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;

    const { userAvatarSrc, placeholder } = this.props;

    return (
      <StyledAvatarInput>
        <form onSubmit={this.handleSubmit}>
          <div className="avatarInputWrapper">
            <div className="avatarInputImg">
              <UserAvatar src={userAvatarSrc} small />
            </div>

            <div className="avatarInput">
              <input
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </form>
      </StyledAvatarInput>
    );
  }
}

export default AvatarInput;
