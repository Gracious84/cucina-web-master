import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledPageHead = styled.div`
  margin-bottom: 40px;
  text-align: center;

  @media ${small} {
    margin-bottom: 35px;
  }

  .signupPageLogo {
    margin: 0 auto;
    width: 220px;

    @media ${small} {
      width: 265px;
    }

    img {
      max-width: 100%;
    }

    span {
      color: #57534e;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
    }
  }
`;
