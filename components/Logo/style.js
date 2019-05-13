import styled from 'styled-components';

export const LogoSmall = styled.a`
  display: block;

  img {
    display: block;
    width: ${props => (props.small ? '32px' : '200px')};
    height: auto;
  }
`;
