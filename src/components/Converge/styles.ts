import styled from 'styled-components';

interface IContainerProps {
  width: number;
}
export const Container = styled.div<IContainerProps>`
  padding: 0 3%;

  @media screen and (max-width: 900px) {
    padding-left: 3%;
  }
  margin: 0 auto;
  max-width: ${props => `${props.width}px`};
  height: 100%;
`;
