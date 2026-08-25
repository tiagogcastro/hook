import { Link as LinkReactDOM } from 'react-router-dom';
import styled, { css } from 'styled-components';

const cssOverlay = css`
  position: relative;
  z-index: 3;
`;
const cssFlex = css`
  display: flex;
  align-items: center;
`;
export const Container = styled.header`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  height: 90px;
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.texts.primary};
`;
export const Rearrange = styled.div`
  ${cssFlex}
  height: 100%;
  justify-content: space-between;
`;
export const Research = styled.div`
  ${cssOverlay}
  ${cssFlex}

  button {
    height: 20px;
    overflow: hidden;
  }
  > input {
    margin-left: 15px;
    width: 200px;
    padding: 5px;
    border-radius: 50rem;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
export const Information = styled.div`
  ${cssFlex}
`;
export const UserProfileButton = styled(LinkReactDOM)`
  ${cssOverlay}
  border-radius: 50rem;
  padding: 3px 20px 3px 7px;
  background-color: ${props => props.theme.colors.background.primary};

  margin-right: 20px;
  display: flex;
  ${cssFlex}
  span {
    font-size: 12px;
    line-height: 0;
    margin-left: 10px;
  }
  transition: 100ms ease-out transform;
  &:hover {
    transform: translate3d(5px, 0, 0);
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Encapsulate = styled.div`
  ${cssFlex}
  margin-right: 10px;
`;

export const ModalContainer = styled.div`
  position: relative;
  @media screen and (max-width: 600px) {
    position: unset;
  }

  > button {
    ${cssOverlay}
    ${cssFlex}
    justify-content: center;
    margin: 0 3px;
    background-color: ${props => props.theme.colors.icons.background.primary};
    border-radius: 50rem;
    width: 35px;
    height: 35px;
    &:hover {
      transform: translate3d(0, 1px, 0);
    }
  }
`;
