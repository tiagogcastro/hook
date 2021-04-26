import styled from 'styled-components';

interface ContainerProps {
  size: number;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.avatar};
  border-radius: 50rem;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
