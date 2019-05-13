import styled from 'styled-components';

export const StyledModal = styled.div`
  .cookNowMobileModal {
    align-items: center;
    background-image: url('/static/images/frames/diamonds.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    padding: 30px;
    text-align: center;
    width: 300px;

    .cookNowMobileModalTitle {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      margin-bottom: 12px;
    }

    .cookNowMobileModalDescription {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    .cookNowMobileQueryModalBtns {
      align-items: center;
      display: flex;
      justify-content: center;

      button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        flex-shrink: 0;
        font-size: 24px;
        height: 64px;
        width: 64px;

        &:first-child {
          color: #f27d65;
          margin-right: 40px;
        }
        &:last-child {
          color: #69beff;
        }
      }
    }

    .cookNowMobileModalBtns {
      button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        width: 248px;

        &:first-child {
          margin-bottom: 12px;
        }
      }
    }
  }
`;
