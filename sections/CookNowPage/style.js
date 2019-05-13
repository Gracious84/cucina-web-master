import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { large } = mediaQueries;

export const StyledCookNow = styled.div`
  .cookNowDesktop {
    background-color: #ffffff;
    display: none;
    height: 100vh;
    overflow: hidden;
    width: 100vw;

    .cookNowDesktopInner {
      background-image: linear-gradient(to right, #faf8f2 30%, transparent 0);
    }

    @media ${large} {
      display: block;
    }
  }

  .cookNowMobile {
    @media ${large} {
      display: none;
    }
  }
`;
