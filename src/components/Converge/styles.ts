import styled, { css } from 'styled-components';

interface ContainerProps {
  isDefault: boolean;
}
export const Container = styled.div<ContainerProps>`
  padding: 0 3%;
  ${props =>
    props.isDefault &&
    css`
      padding-left: 115px;
    `}
  @media screen and (max-width: 900px) {
    padding-left: 3%;
  }
  margin: 0 auto;
  max-width: 1500px;
  height: 100%;
`;
