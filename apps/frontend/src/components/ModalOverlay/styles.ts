import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  ${props =>
    !props.isVisible &&
    css`
      display: none;
    `}
`;
