import styled from 'styled-components';

export const StyledVideoThumbnail = styled.div`
  width: 100%;

  .inner {
    padding-top: 100%;
    position: relative;
    width: 100%;

    &:hover {
      .thumbnail .thumbnailImg img {
        transform: scale(1.1);
      }
    }

    .thumbnail {
      bottom: 0;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;

      .thumbnailVideo {
        height: 100%;
        width: 100%;
      }

      .thumbnailImg {
        background-color: #ffffff;
        cursor: pointer;
        height: 100%;
        width: 100%;

        ::before {
          background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.7),
            rgb(0, 0, 0, 0)
          );
          content: '';
          height: 30%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        ::after {
          background: linear-gradient(
            to top,
            rgba(20, 20, 20, 0.7),
            rgb(0, 0, 0, 0)
          );
          bottom: 0;
          content: '';
          height: 30%;
          left: 0;
          position: absolute;
          right: 0;
          width: 100%;
          z-index: 1;
        }

        span.lazy-load-image-background {
          width: 100%;
          height: 100%;
        }

        img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
          transition: 0.8s ease;
        }
      }
    }

    .createdBy {
      display: block;
      height: 105px;
      left: -8px;
      position: absolute;
      top: -8px;
      width: 105px;
      z-index: 2;

      .ribbon {
        height: 100%;
        width: 100%;
      }

      .author {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 32px;
        position: absolute;
        top: 32px;

        .avatar {
          align-items: center;
          background-color: #ffffff;
          border: solid 1px #e6e3e1;
          border-radius: 50%;
          box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
          display: flex;
          flex-shrink: 0;
          height: 32px;
          justify-content: center;
          width: 32px;
        }

        .name {
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          margin-left: 9px;
          transform: translateY(2px);
          white-space: nowrap;
        }
      }
    }

    .playButton {
      align-items: center;
      background: #ffffff;
      border: none;
      border-radius: 50%;
      bottom: 32px;
      cursor: pointer;
      display: flex;
      height: 32px;
      justify-content: center;
      left: 32px;
      position: absolute;
      width: 32px;
      z-index: 2;

      &:focus,
      &:active {
        outline: none;
      }

      i {
        color: #57534e;
      }
    }
  }

  .hidden {
    display: none;
  }
`;

export const AvatarImage = styled.img`
  width: ${props => props.dimensions};
  height: ${props => props.dimensions};
`;
