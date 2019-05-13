import React, { Component } from 'react';

import AvatarInput from '../../../../components/AvatarInput';
import BorderedSubSection from '../../../../components/BorderedSubSection';
import Button from '../../../../components/Button';
import Comment from '../../../../components/Comment';

import { StyledSection } from './style';

const comments = [
  {
    id: 1,
    authorImageSrc: '/static/images/icons/user.svg',
    authorName: 'Maria Giulia',
    authorStatus: 'Loves pasta',
    createdAt: '19 Apr',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim mauris nec quam pharetra lobortis. Pellentesque viverra venenatis mi in interdum. Maecenas malesuada mollis accumsan. Maecenas augue erat, molestie sit amet hendrerit eu, porttitor id felis. Proin varius luctus.',
    likes: 12,
    replies: [],
  },
  {
    id: 2,
    authorImageSrc: '/static/images/icons/user.svg',
    authorName: 'Maria Giulia',
    authorStatus: 'Loves pasta',
    createdAt: '12 Apr',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim mauris nec quam pharetra lobortis. Pellentesque viverra venenatis mi in interdum. Maecenas malesuada mollis accumsan. Maecenas augue erat, molestie sit amet hendrerit eu, porttitor id felis. Proin varius luctus.',
    likes: 9,
    replies: [
      {
        id: 1,
        authorImageSrc: '/static/images/icons/user.svg',
        authorName: 'Maria Giulia',
        authorStatus: 'Loves pasta',
        createdAt: '13 Apr',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim mauris nec quam pharetra lobortis. Pellentesque viverra venenatis mi in interdum.',
        likes: 3,
      },
    ],
  },
];

class RecipeComments extends Component {
  render() {
    return (
      <StyledSection>
        <BorderedSubSection title="Comments">
          <div className="addCommentInput">
            <AvatarInput
              placeholder="Write a comment"
              userAvatarSrc="/static/images/icons/user.svg"
            />
          </div>

          <div className="recipeCommentsList">
            {comments.map(comment => (
              <div className="recipeCommentWrapper" key={comment.id}>
                <div className="recipeComment">
                  <Comment
                    authorImageSrc={comment.authorImageSrc}
                    authorName={comment.authorName}
                    authorStatus={comment.authorStatus}
                    createdAt={comment.createdAt}
                    content={comment.content}
                    likes={comment.likes}
                  />
                </div>

                <div className="recipeCommentReplies">
                  {comment.replies.map(replyComment => (
                    <div key={replyComment.id}>
                      <Comment
                        authorImageSrc={replyComment.authorImageSrc}
                        authorName={replyComment.authorName}
                        authorStatus={replyComment.authorStatus}
                        createdAt={replyComment.createdAt}
                        content={replyComment.content}
                        likes={replyComment.likes}
                        noReply
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="viewAllButton">
            <Button
              text="View all comments"
              buttonType="secondary"
              buttonSize="large"
              aria-label="view all comments"
            />
          </div>
        </BorderedSubSection>
      </StyledSection>
    );
  }
}

export default RecipeComments;
