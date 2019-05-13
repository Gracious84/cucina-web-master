import styled from 'styled-components';

export const StyledAvatarInput = styled.div`
  align-items: center;
  background-color: #faf8f2;
  border: solid 1px #e6e3e1;
  border-radius: 8px;
  display: flex;
  height: 64px;
  padding: 0 16px;

  form {
    width: 100%;
  }

  .avatarInputWrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    width: 100%;

    .avatarInputImg {
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 15px;
    }

    .avatarInput {
      flex-grow: 1;
      flex-shrink: 1;

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
`;
