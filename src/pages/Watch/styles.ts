import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas: 'header', 'body';
`;

export const Body = styled.div`
  grid-area: 'body';
  overflow-y: auto;
  overflow-x: hidden;
`;
export const NoEvents = styled.div`
  pointer-events: none;
`;
