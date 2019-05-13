import styled from 'styled-components';

export const StyledCarousel = styled.div.attrs(({ activeIndex }) => {
  const theme = {};

  theme.trackTransition = `translateY(${activeIndex * -65}vh)`;

  return theme;
})`
  .carouselInner {
    align-items: center;
    display: flex;
    position: relative;

    .carouselList {
      height: 100vh;

      .carouselTrack {
        padding-top: 25vh;
        transform: ${props => props.trackTransition};
        transition: 500ms;

        .carouselImg {
          box-shadow: -4px 4px 0 0 rgba(0, 0, 0, 0.1);
          height: 50vh;
          object-fit: cover;
          object-position: center;
          width: 50vh;

          &:not(:last-child) {
            margin-bottom: 15vh;
          }

          img {
            height: 100%;
            object-fit: cover;
            object-position: center;
            width: 100%;
          }
        }
      }
    }

    .carouselControls {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      margin-right: 32px;
      order: -1;

      .carouselPrevBtn,
      .carouselNextBtn {
        align-items: center;
        background-color: #ffffff;
        border: solid 1px #ccc6c0;
        border-radius: 50%;
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        color: inherit;
        cursor: pointer;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        font-size: 24px;
        height: 40px;
        justify-content: center;
        width: 40px;

        &:focus,
        &:active {
          outline: none;
        }

        &:disabled {
          cursor: default;
          opacity: 0.4;
        }
      }

      .carouselNextBtn {
        margin-top: 24px;
      }

      .carouselPrevBtn {
        margin-bottom: 24px;
      }

      .carouselThumbList {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .carouselThumbItem {
          box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
          cursor: pointer;
          height: 56px;
          width: 56px;

          &:not(:last-child) {
            margin-bottom: 16px;
          }

          &:focus,
          &:active {
            outline: none;
          }

          img {
            height: 100%;
            object-fit: cover;
            object-position: center;
            width: 100%;
          }
        }

        .carouselThumbActive {
          border: solid 1px #69beff;
        }
      }
    }
  }
`;
