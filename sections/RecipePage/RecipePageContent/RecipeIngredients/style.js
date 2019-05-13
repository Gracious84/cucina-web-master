import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { medium } = mediaQueries;

export const StyledIngredients = styled.div`
  .ingredientsHead {
    align-items: center;
    display: flex;
    margin-bottom: 40px;

    .measurement {
      align-items: center;
      display: flex;

      & > span {
        color: #57534e;
        display: none;
        font-family: BrownStd-Regular;
        font-size: 16px;
        line-height: 1.5;
        margin-right: 24px;

        @media ${medium} {
          display: block;
        }
      }

      .measurementSwitch {
        flex-grow: 0;
        flex-shrink: 0;
        width: 188px;

        & > div {
          box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);

          @media ${medium} {
            box-shadow: none;
          }
        }
      }
    }

    .servings {
      align-items: center;
      display: flex;
      margin-right: 40px;

      @media ${medium} {
        margin-right: 87px;
      }

      & > span {
        color: #57534e;
        flex-grow: 0;
        flex-shrink: 0;
        font-family: BrownStd-Regular;
        font-size: 16px;
        line-height: 1.5;
        margin-right: 25px;
      }

      & > button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        flex-grow: 0;
        flex-shrink: 0;

        &:first-of-type {
          margin-right: 12px;
        }
      }
    }
  }

  .ingredientsListWrapper {
    margin-bottom: 35px;
  }

  .shoppingListBtn {
    & > button {
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
      padding: 0 30px;
      width: 100%;

      @media ${medium} {
        width: unset;
      }
    }
  }
`;
