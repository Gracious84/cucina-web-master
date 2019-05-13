import styled from 'styled-components';

import { mediaQueries } from '../../utils/ui/mediaQueries';

const { medium } = mediaQueries;

export const StyledList = styled.div`
  .ingredientItem {
    align-items: flex-start;
    display: flex;

    &:not(:last-child) {
      margin-bottom: ${props => props.itemsSpacing}px;
    }

    & > button {
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 24px;
      transform: translateY(-8px);
    }

    .ingredientMeasurment {
      color: #57534e;
      flex-grow: 0;
      flex-shrink: 0;
      font-family: BrownStd-Regular;
      font-size: 16px;
      line-height: 20px;
      margin-right: 32px;
      white-space: nowrap;
      width: 120px;

      @media ${medium} {
        margin-right: 50px;
      }
    }

    .ingredientDescription {
      color: #57534e;
      font-family: BrownStd-Bold;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
    }
  }
`;
