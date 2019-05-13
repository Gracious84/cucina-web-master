import styled from 'styled-components';

export const StyledLink = styled.a`
  background-color: #ffffff;
  border: solid 1px #e6e3e1;
  border-radius: 50%;
  display: block;
  height: 36px;
  padding: 7px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;

  &:focus,
  &:active {
    outline: none;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
