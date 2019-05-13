import styled from 'styled-components';

export const StyledButton = styled.div`
  a {
    align-items: center;
    background-color: #69beff;
    border: none;
    border-radius: 100px;
    box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-family: BrownStd-Bold;
    font-size: 16px;
    font-weight: bold;
    height: 56px;
    justify-content: center;
    padding: 0 15px;
    text-decoration: none;
    width: 100%;

    &:active,
    &:focus {
      outline: none;
    }

    span {
      padding-top: 4px;
    }

    img {
      height: 22px;
      margin-right: 8px;
      width: 22px;
    }
  }
`;
