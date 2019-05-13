import styled from 'styled-components';

export const StyledPageContent = styled.div`
  text-align: center;

  .loginPageInner {
    align-items: center;
    display: flex;
    flex-direction: column;

    .loginThirdPartyButtons {
      & > button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        padding: 0 8px;
        position: relative;
        width: 280px;

        svg {
          left: 8px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .loginPageSeparator {
      align-items: center;
      display: flex;
      margin: 35px 0;

      .loginPageSeparatorLine {
        background-color: #b8b2ad;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
        height: 1px;
        width: 120px;
      }

      .loginPageSeparatorText {
        color: #57534e;
        font-size: 16px;
        line-height: 1.5;
        margin: 0 10px;
        text-align: center;
      }
    }

    .loginForm {
      .loginInput {
        margin-bottom: 16px;
        width: 280px;
      }

      .loginSubmit {
        & > button {
          width: 280px;
        }
      }
    }
  }
`;
