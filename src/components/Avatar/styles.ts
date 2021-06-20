import styled from 'styled-components';

interface ContainerProps {
  size: number;
}
export const Container = styled.div<ContainerProps>`
  position: relative;
  z-index: 3;
  background-color: ${props => props.theme.colors.avatar};
  border-radius: 50rem;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
