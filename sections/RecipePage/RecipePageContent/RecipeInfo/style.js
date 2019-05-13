import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { large, medium } = mediaQueries;

export const StyledRecipeInfo = styled.div`
  .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${large} {
      flex-direction: row;
    }
  }

  .left {
    margin-bottom: 32px;
    margin-right: 50px;
    max-width: 560px;

    @media ${large} {
      margin-bottom: 0;
    }

    .title {
      color: #57534e;
      font-family: BrownStd-Bold;
      font-size: 32px;
      font-weight: bold;
      line-height: 1.25;
      margin: 0;
      margin-bottom: 15px;
    }

    .description {
      color: #57534e;
      font-family: BrownStd-Regular;
      font-size: 16px;
      line-height: 1.4;
      margin: 0;
      margin-bottom: 20px;

      @media ${medium} {
        font-size: 20px;
      }
    }

    .actions {
      display: flex;

      button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);

        &:not(:last-child) {
          margin-right: 16px;
        }

        &.mediumUp {
          display: none;
          @media ${medium} {
            display: flex;
          }
        }
      }
    }
  }

  .right {
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 50px;
    width: 100%;

    @media ${medium} {
      width: 320px;
    }

    button {
      height: 40px;

      @media ${medium} {
        height: 56px;
      }
    }
  }
`;
