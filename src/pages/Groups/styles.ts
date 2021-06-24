import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 90px 4fr 70px;

  height: 100vh;
`;

export const GroupsContainer = styled.aside`
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
  width: calc(100% - 5px);
  align-items: center;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: none;
  border-radius: 20px;
  max-height: 63vh;
  &::-webkit-scrollbar {
    width: 1px;
    height: 0;
    background-color: ${props => props.theme.colors.background.secondary};
  }
  &::-webkit-scrollbar-thumb {
    border: 0;
    background-color: ${props => props.theme.colors.background.quaternary};
  }
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
  width: 54px;
  height: 54px;
  margin: 2px 0;
  border: 2px solid ${props => props.theme.colors.groups.globals.primary};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.groups.globals.primary};
  transition: 200ms ease-in-out;
  box-shadow: 0 0 0 ${props => props.theme.colors.groups.shadow.primary};
  transition-property: transform, box-shadow;
  &:hover {
    box-shadow: 0 0 2px ${props => props.theme.colors.groups.shadow.primary};
    transform: scale(1.01);
  }
`;
export const Content = styled.section`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  h2 {
    color: ${props => props.theme.colors.texts.primary};
    font-weight: bold;
    position: relative;
    &::before {
      display: block;
      position: absolute;
      bottom: 0;
      content: '';
      background-color: ${props => props.theme.colors.background.quaternary};
      height: 1px;
      width: 50px;
    }
  }
`;
export const CardContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 80px;
  .swiper-container {
    padding: 0 10px;
    .swiper-button-prev::after,
    .swiper-button-next::after {
      margin: 5px;
      color: ${props => props.theme.colors.texts.primary};
      padding: 10px 13px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.background.secondary};
      font-size: 20px;
    }
    .swiper-button-disabled {
      display: none !important;
    }
    .swiper-slide {
      cursor: grab;
      padding: 50px 0;
      transition: transform ease-in-out 100ms;
      &:hover {
        transform: scale(1.1);
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Card = styled.div`
  width: 220px;
  padding: 0 8px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.background.secondary};
  display: flex;
  flex-direction: column;
  header {
    margin-top: 8px;
    flex: 1;
    border-radius: 3px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
    max-height: 200px;
    background-color: ${props => props.theme.colors.background.secondary};
  }
  section {
    margin-top: 5px;
    h2 {
      font-size: 15px;
    }
    span {
      font-size: 12px;
      color: ${props => props.theme.colors.texts.secondary};
    }
  }
  height: 300px;
`;
