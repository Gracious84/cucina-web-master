import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { medium } = mediaQueries;

export const StyledNav = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e6e3e1;
  height: 72px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;

  .navigationBarInner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1600px;
    padding: 16px;
    width: 100%;

    .logo {
      margin-right: 16px;
      flex-shrink: 0;

      @media ${medium} {
        margin-right: 11px;
      }
    }

    .searchBar {
      flex-grow: 1;
      flex-shrink: 1;
      margin-right: 16px;

      @media ${medium} {
        margin-right: 20px;
      }
    }

    .navList {
      margin-right: 20px;
    }

    .navLink {
      font-family: BrownStd-Regular;
      font-size: 16px;
      line-height: 1.5;
      color: #57534e;
      text-decoration: none;
      padding: 5px;
      flex-shrink: 0;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:focus,
      &:active,
      &:visited {
        color: #57534e;
        outline: none;
      }
    }

    .createBtn {
      margin-right: 16px;
      flex-shrink: 0;

      @media ${medium} {
        margin-right: 14px;
      }
    }

    .userAvatar {
      flex-shrink: 0;
    }

    .medium-down {
      @media ${medium} {
        display: none;
      }
    }

    .medium-up {
      display: none;

      @media ${medium} {
        display: block;
      }
    }
  }
`;
