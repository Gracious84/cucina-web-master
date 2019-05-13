import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAvatar from '../UserAvatar';
import Button from '../Button';
import CommentReplyInput from '../CommentReplyInput';

import { StyledComment } from './style';

import { icons } from '../../utils/ui/icons';

class Comment extends Component {
  state = {
    replyInput: false,
  };

  handleReplyButtonClick = () => {
    this.setState({ replyInput: true });
  };

  handleReplyCancel = () => {
    this.setState({ replyInput: false });
  };

  render() {
    const {
      authorImageSrc,
      authorName,
      authorStatus,
      createdAt,
      content,
      likes,
      noReply,
    } = this.props;

    const { replyInput } = this.state;

    return (
      <StyledComment replyInput={replyInput}>
        <div className="commentWrapper">
          <div className="commentHead">
            <div className="commentAvatar">
              <UserAvatar src={authorImageSrc} small />
            </div>

            <div className="commentAuthorName">{authorName}</div>

            <div className="commentAuthorStatus">- {authorStatus}</div>

            <div className="commentDate">{createdAt}</div>
          </div>

          <div className="commentContent">{content}</div>

          <div className="commentActions">
            {!noReply && (
              <Button
                text="Reply"
                iconPosition="left"
                iconSrc={icons.comment}
                buttonType="secondary"
                buttonSize="medium"
                onClick={this.handleReplyButtonClick}
                aria-label="reply"
              />
            )}

            <Button
              text={`Love (${likes})`}
              iconPosition="left"
              iconSrc={icons.favoriteBorder}
              buttonType="secondary"
              buttonSize="medium"
              aria-label="like"
            />
          </div>
        </div>

        <div className="commentReplyInput">
          {replyInput && !noReply && (
            <CommentReplyInput
              onCancelClick={this.handleReplyCancel}
              userAvatar={icons.user}
            />
          )}
        </div>
      </StyledComment>
    );
  }
}

Comment.propTypes = {
  authorImageSrc: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorStatus: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  noReply: PropTypes.bool,
};

export default Comment;
