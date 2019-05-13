import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledComment = styled.div`
  .commentWrapper {
    border: solid 1px #e6e3e1;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
    padding: 16px 16px 30px;
    margin-bottom: ${props => (props.replyInput ? '16px' : '0')};

    @media ${small} {
      margin-bottom: ${props => (props.replyInput ? '24px' : '0')};
    }

    .commentHead {
      align-items: center;
      display: flex;
      margin-bottom: 15px;

      .commentAvatar {
        margin-right: 15px;
      }

      .commentAuthorName {
        color: #57534e;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.33;
        margin-right: 5px;
      }

      .commentAuthorStatus,
      .commentDate {
        color: #57534e;
        font-size: 12px;
        line-height: 1.33;
        opacity: 0.5;
      }

      .commentAuthorStatus {
        margin-right: auto;
      }
    }

    .commentContent {
      color: #57534e;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
      padding: 0 15px 0 45px;

      @media ${small} {
        padding: 0 45px;
      }
    }

    .commentActions {
      align-items: center;
      display: flex;
      margin-left: 45px;

      & > button {
        flex-shrink: 0;

        &:first-child {
          margin-right: 16px;
        }
      }
    }
  }

  .commentReplyInput {
    padding-left: 35px;

    @media ${small} {
      padding-left: 85px;
    }
  }
`;
