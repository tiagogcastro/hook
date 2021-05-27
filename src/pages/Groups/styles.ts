import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 90px 4fr 70px;

  height: 100vh;
`;

export const GroupsContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.secondary};
  padding-top: 20px;
`;
export const GroupNest = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GroupSettings = styled.div`
  width: 60px;
  display: flex;
  padding: 20px 0;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.background.primary};
`;
export const Group = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  width: 55px;
  height: 55px;
  margin: 2px 0;
  border: 2px solid
    ${props => shade(0.3, props.theme.colors.background.secondary)};
  border-radius: 50%;
  background-color: ${props =>
    shade(0.3, props.theme.colors.background.secondary)};
  transition: 200ms ease-in-out;
  box-shadow: 0 0 0;
  transition-property: transform, box-shadow;
  &:hover {
    box-shadow: 0 0 10px
      ${props => shade(0.5, props.theme.colors.background.secondary)};
    transform: scale(1.1);
  }
`;
export const Content = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
