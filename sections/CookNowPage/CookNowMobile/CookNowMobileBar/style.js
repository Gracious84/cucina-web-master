import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledBar = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e6e3e1;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100vw;

  .cookNowMobileBottomBarTitle {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.25;
    margin: 0 50px;

    @media ${small} {
      margin: 0 70px;
    }
  }

  button {
    box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
  }
`;
