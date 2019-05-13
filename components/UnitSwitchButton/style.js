import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  border-radius: 12px;

  button {
    background-color: #ffffff;
    border: 1px solid #ccc6c0;
    color: #807a73;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    font-family: BrownStd-Bold;
    font-size: 12px;
    font-weight: bold;
    height: 24px;
    width: 50%;

    &:first-child {
      border-radius: 12px 0 0 12px;
      border-right: none;
    }

    &:last-child {
      border-radius: 0 12px 12px 0;
    }

    &:focus,
    &:active {
      outline: none;
    }

    &.imperial {
      background-color: ${props =>
        props.unit === 'imperial' ? '#69beff' : '#ffffff'};
      color: ${props => (props.unit === 'imperial' ? '#ffffff' : '#807a73')};
    }

    &.metrics {
      background-color: ${props =>
        props.unit === 'metrics' ? '#69beff' : '#ffffff'};
      color: ${props => (props.unit === 'metrics' ? '#ffffff' : '#807a73')};
    }
  }
`;
