import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  height: 40px;
  position: relative;

  i {
    display: block;
    position: absolute;
    font-size: 24px;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledInput = styled.input`
  background-color: #faf8f2;
  border: solid 1px #e6e3e1;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
  color: #57534e;
  display: block;
  font-family: BrownStd-Regular;
  font-size: 16px;
  height: 40px;
  letter-spacing: 1px;
  line-height: 24px;
  padding-left: 40px;
  padding-right: 12px;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }
`;
