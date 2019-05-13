import styled from 'styled-components';

export const StyledCookNowDesktop = styled.div`
  .cookNowDesktopInner {
    align-items: center;
    display: flex;
    padding: 0 10vw;
    position: relative;

    .cookNowDesktopCarousel {
      margin-right: 10vw;
    }

    .cookNowDesktopText {
      max-width: 450px;
      width: 40%;

      .cookNowDesktopTextBorder {
        opacity: 0.5;

        img {
          width: 100%;
        }
      }

      .cookNowDesktopTextInner {
        margin: 25px auto;
        width: 90%;
      }
    }

    .cookNowDesktopCloseBtn {
      left: 3vw;
      position: absolute;
      top: 5vh;

      button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
