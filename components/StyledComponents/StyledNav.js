import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { medium, small } = mediaQueries;

export const StyledNav = styled.div`
  .recipeNavList {
    display: flex;
    justify-content: center;
    list-style: none;

    @media ${medium} {
      justify-content: flex-start;
    }
  }

  .recipeNavItem {
    background-color: #ffffff;
    color: #57534e;
    cursor: pointer;
    font-family: BrownStd-Bold;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.25;
    opacity: 0.5;
    padding: 10px;
    position: relative;
    text-align: center;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 5px;

      @media ${small} {
        margin-right: 10px;
      }

      @media ${medium} {
        margin-right: 20px;
      }
    }

    &::after {
      background-color: transparent;
      bottom: -1px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    @media ${small} {
      padding: 10px 15px;
    }

    @media ${medium} {
      font-size: 16px;
      padding: 10px 30px;
    }
  }

  .recipeNavItem--active {
    color: #5caff7;
    opacity: 1;

    &::after {
      background-color: #5caff7;
    }
  }
`;
