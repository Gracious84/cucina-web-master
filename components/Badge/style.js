import styled from 'styled-components';

const getColor = color => {
  switch (color) {
    case 'primary':
      return '#69beff';

    case 'warning':
      return '#ffd633';

    case 'success':
      return '#51e8b4';

    case 'danger':
      return '#f27d65';

    default:
      return '#57534e';
  }
};

export const StyledBadge = styled.span`
  background-color: ${props => getColor(props.color)};
  border-radius: 100px;
  color: #ffffff;
  font-family: BrownStd-Bold;
  font-size: 12px;
  line-height: 16px;
  padding: 0 8px;
`;
