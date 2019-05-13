import styled from 'styled-components';

export const StyledCommentReply = styled.div`
  background-color: #faf8f2;
  border: solid 1px #e6e3e1;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0), -2px 2px 0 0 rgba(0, 0, 0, 0.1);
  padding: 16px;

  .replyInputWrapper {
    align-items: center;
    display: flex;
    margin-bottom: 80px;

    .replyAvatar {
      flex-grow: 0;
      margin-right: 15px;
    }

    .replyInput {
      flex-grow: 1;

      & > input {
        color: #57534e;
        background-color: #faf8f2;
        border: none;
        display: block;
        font-size: 16px;
        line-height: 1.5;
        padding: 10px;
        width: 100%;

        &::placeholder {
          opacity: 0.5;
        }

        &:focus,
        &:active {
          outline: none;
        }
      }
    }
  }

  .replyActions {
    display: flex;
    justify-content: flex-end;

    & > button {
      width: 96px;

      &:first-child {
        margin-right: 16px;
      }
    }
  }
`;
