import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { medium } = mediaQueries;

export const StyledSection = styled.div`
  .cookStep {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    @media ${medium} {
      align-items: flex-start;
      flex-direction: row;

      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    .cookStepThumbnail {
      flex-grow: 0;
      flex-shrink: 0;
      height: 320px;
      margin-bottom: 20px;
      width: 320px;

      img {
        height: 100%;
        object-fit: cover;
        object-position: center;
        width: 100%;
      }

      @media ${medium} {
        margin-bottom: 0;
        margin-right: 32px;
      }
    }

    .cookStepText {
      max-width: 320px;

      .cookStepTitle {
        color: #57534e;
        font-family: BrownStd-Bold;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.25;
        margin-bottom: 15px;

        @media ${medium} {
          padding-top: 5px;
        }
      }

      .cookStepDescription {
        color: #57534e;
        font-family: BrownStd-Regular;
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
`;
