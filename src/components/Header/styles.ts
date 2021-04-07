import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 'header';
  background-color: ${props => props.theme.colors.secondary};
`;
export const Layers = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LayerLeft = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
`;
export const SearchBar = styled.div`
  margin-left: 15px;
  input {
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    padding: 2px 20px;
    border-radius: 50rem;
    background-color: ${props => props.theme.colors.searchbar.primary};
  }
`;
export const LayerMiddle = styled.div`
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 20px;
      a {
        border-radius: 10px;
        &:hover {
          background-color: ${props => props.theme.colors.hover.primary};
        }
        text-decoration: none;
        display: block;
        padding: 5px 10px;
      }
    }
  }
`;
export const LayerRight = styled.div`
  align-items: center;
  display: flex;
`;
export const Box = styled.div`
  margin: 0 10px;
`;
