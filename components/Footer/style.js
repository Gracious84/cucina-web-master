import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { small, medium, large, xLarge } = mediaQueries;

export const StyledFooter = styled.footer`
  background-color: #faf8f2;
  padding: 50px 24px;

  @media ${medium} {
    padding: 50px 75px;
  }

  @media ${xLarge} {
    padding: 55px 128px;
  }

  .footerHead {
    margin-bottom: 50px;
  }

  .footerSections {
    display: flex;
    flex-direction: column;

    @media ${small} {
      align-items: center;
      text-align: center;
    }

    @media ${xLarge} {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      text-align: left;
    }

    .footerSection {
      flex-shrink: 0;
      flex-grow: 0;
      margin-bottom: 50px;

      @media ${medium} {
        margin-bottom: 70px;

        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }

    .footerAboutUsSection {
      width: 100%;

      @media ${small} {
        width: 50%;
      }

      @media ${xLarge} {
        width: 230px;
      }

      .footerAboutUsLinks {
        & > a {
          display: block;
          font-size: 20px;
          line-height: 1.4;
          color: #57534e;
          text-decoration: none;

          &:not(:last-child) {
            margin-bottom: 16px;
          }

          &:focus,
          &:active {
            outline: none;
          }
        }
      }
    }

    .footerFollowSection {
      width: 100%;

      @media ${small} {
        width: 50%;
      }

      @media ${xLarge} {
        width: 320px;
      }

      .socialLinks {
        display: flex;

        @media ${small} {
          justify-content: center;
        }

        @media ${xLarge} {
          justify-content: flex-start;
        }

        a {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }

    .footerNewsletterSection {
      width: 100%;

      @media ${small} {
        width: 50%;
      }

      @media ${xLarge} {
        width: 400px;
      }

      .footerNewsletterForm {
        margin-bottom: 16px;

        form {
          display: flex;
          flex-direction: column;

          @media ${small} {
            flex-direction: row;
            justify-content: center;
          }

          @media ${xLarge} {
            justify-content: flex-start;
          }

          .footerNewsletterInput {
            margin-bottom: 12px;

            @media ${small} {
              margin-right: 12px;
              margin-bottom: 0;
            }
          }
        }
      }

      .footerNewsletterMsg {
        opacity: 0.5;
        font-size: 12px;
        line-height: 1.33;
        color: #57534e;
      }
    }
  }

  .footerMsg {
    opacity: 0.5;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #57534e;
  }
`;
