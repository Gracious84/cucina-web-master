import styled from 'styled-components';

export const StyledButton = styled.button.attrs(
  ({ buttonType, buttonSize }) => {
    const theme = {};

    if (buttonType === 'primary') {
      theme.backgroundColor = '#69beff';
      theme.border = 'none';
      theme.fontColor = '#ffffff';
    } else if (buttonType === 'secondary') {
      theme.backgroundColor = '#ffffff';
      theme.border = 'solid 1px #ccc6c0';
      theme.fontColor = '#57534e';
    }

    if (buttonSize === 'small') {
      theme.buttonHeight = '24px';
      theme.fontSize = '12px';
      theme.iconSize = '16px';
    } else if (buttonSize === 'medium') {
      theme.buttonHeight = '32px';
      theme.fontSize = '14px';
      theme.iconSize = '16px';
    } else if (buttonSize === 'large') {
      theme.buttonHeight = '40px';
      theme.fontSize = '16px';
      theme.iconSize = '24px';
    }

    return theme;
  }
)`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: 100px;
  color: ${props => props.fontColor};
  cursor: pointer;
  display: flex;
  font-family: BrownStd-Bold;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  height: ${props => props.buttonHeight};
  justify-content: center;
  line-height: 20px;
  padding: 0 15px;

  &:active,
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #e6e3e1;
    border: none;
    color: #57534e;
    cursor: default;
  }

  span {
    order: ${props => (props.iconPosition === 'left' ? 1 : 0)};
    padding-top: 2px;
  }

  i {
    font-size: ${props => props.iconSize};
    margin-right: 4px;
    order: ${props => (props.iconPosition === 'left' ? 0 : 1)};
  }
`;
