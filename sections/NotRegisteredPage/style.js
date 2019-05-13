import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledPage = styled.div`
  text-align: center;

  .notRegisteredPageMsg {
    color: #57534e;
    font-size: 16px;
    line-height: 1.5;
    margin: 0 auto 40px;
    max-width: 300px;
  }

  .notRegisteredPageButtons {
    & > button {
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
      display: block;
      margin: 0 auto;
      width: 220px;

      @media ${small} {
        height: 56px;
        width: 250px;
      }

      &:first-child {
        margin-bottom: 16px;
      }
    }
  }
`;
