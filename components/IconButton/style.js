import styled from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: solid 1px #ccc6c0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  &:active,
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #e6e3e1;
    border: none;
    cursor: default;
  }

  i {
    font-size: 20px;
  }
`;
