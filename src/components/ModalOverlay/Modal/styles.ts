import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: absolute;

  border-radius: 10px;
  right: 0;
  top: 50px;
  width: 300px;
  @media screen and (max-width: 600px) {
    right: 2.5%;
    width: 95%;
    max-width: 600px;
  }
  z-index: 3;
  padding: 40px 50px 100px 18px;
  background-color: ${props => props.theme.colors.background.ternary};
  ${props =>
    !props.isVisible &&
    css`
      display: none;
    `}
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &:before {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.background.ternary};
    right: 11px;
    top: -10px;
    width: 20px;
    height: 20px;

    transform: rotateZ(-45deg);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
