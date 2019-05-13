import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledIngredients = styled.div`
  margin-bottom: 150px;
  margin-top: 64px;

  .cookNowMobileIngredientsHead {
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #e6e3e1;
    display: flex;
    height: 64px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;

    button {
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
    }

    .cookNowMobileIngredientsTitle {
      color: #57534e;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.33;
      margin: 0 50px;
      text-align: center;

      @media ${small} {
        margin: 0 70px;
      }
    }
  }

  .cookNowMobileIngredientsList {
    .cookNowMobileIngredientItem {
      padding: 20px;

      &:nth-child(odd) {
        background-color: #fcfbf8;
      }
      &:nth-child(even) {
        background-color: #faf8f2;
      }
    }
  }
`;
