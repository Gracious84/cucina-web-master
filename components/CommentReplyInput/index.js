import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import UserAvatar from '../UserAvatar';

import { StyledCommentReply } from './style';

class CommentReplyInput extends PureComponent {
  static propTypes = {
    userAvatar: PropTypes.string.isRequired,
    onCancelClick: PropTypes.func.isRequired,
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

  handleCancel = () => {
    const { onCancelClick } = this.props;

    onCancelClick();
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;

    const { userAvatar } = this.props;

    return (
      <StyledCommentReply>
        <form onSubmit={this.handleSubmit}>
          <div className="replyInputWrapper">
            <div className="replyAvatar">
              <UserAvatar avatar={userAvatar} small />
            </div>

            <div className="replyInput">
              <input
                type="text"
                value={inputValue}
                placeholder="Write a reply"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="replyActions">
            <Button
              text="Cancel"
              onClick={this.handleCancel}
              buttonType="secondary"
              buttonSize="large"
              aria-label="cancel reply"
            />

            <Button
              type="submit"
              text="Send"
              buttonType="primary"
              buttonSize="large"
              aria-label="submit reply"
            />
          </div>
        </form>
      </StyledCommentReply>
    );
  }
}

export default CommentReplyInput;
