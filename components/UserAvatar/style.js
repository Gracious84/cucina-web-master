import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #faf8f2;
  border: solid 1px #e6e3e1;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
  color: #57534e;
  cursor: pointer;
  display: flex;
  font-family: BrownStd-Bold;
  font-size: 16px;
  font-weight: bold;
  height: ${props => (props.small ? '32px' : '40px')};
  justify-content: center;
  overflow: hidden;
  width: ${props => (props.small ? '32px' : '40px')};

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;
