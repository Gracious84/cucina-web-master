import styled from 'styled-components';

export const StyledInput = styled.div.attrs(({ filled, inputSize }) => {
  const theme = {};

  if (filled) {
    theme.backgroundColor = '#faf8f2';
  } else {
    theme.backgroundColor = '#ffffff';
  }

  if (inputSize === 'small') {
    theme.fontSize = '12px';
    theme.iconSize = '16px';
    theme.inputHeight = '24px';
    theme.padding = '2px';
  } else if (inputSize === 'medium') {
    theme.fontSize = '14px';
    theme.iconSize = '16px';
    theme.inputHeight = '32px';
    theme.padding = '8px';
  } else if (inputSize === 'large') {
    theme.fontSize = '16px';
    theme.iconSize = '24px';
    theme.inputHeight = '40px';
    theme.padding = '8px';
  }

  return theme;
})`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border: solid 1px #e6e3e1;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
  display: flex;
  height: ${props => props.inputHeight};
  padding: ${props => props.padding};

  & > input {
    background-color: transparent;
    border: none;
    color: #57534e;
    flex-grow: 1;
    flex-shrink: 1;
    font-size: ${props => props.fontSize};
    line-height: 1;
    padding-top: 2px;
    order: ${props => (props.iconPosition === 'left' ? 1 : 0)};

    &:active,
    &:focus {
      outline: none;
    }

    &:disabled,
    &::placeholder {
      opacity: 0.5;
    }
  }

  & > img {
    flex-grow: 0;
    flex-shrink: 0;
    height: ${props => props.iconSize};
    margin-right: 4px;
    order: ${props => (props.iconPosition === 'left' ? 0 : 1)};
    width: ${props => props.iconSize};
  }
`;
