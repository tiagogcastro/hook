import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  background-color: ${props => props.theme.colors.primary};
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 0 3%;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
