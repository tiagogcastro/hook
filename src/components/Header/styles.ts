import { Link as LinkReactDOM } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavigationProps {
  isDefault: boolean;
}
const cssOverlay = css`
  position: relative;
  z-index: 2;
`;
const cssFlex = css`
  display: flex;
  align-items: center;
`;
export const Container = styled.header`
  height: 100%;
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
export const Navigation = styled.nav<NavigationProps>`
  ${cssOverlay}
  ${cssFlex}
  background-color: ${props => props.theme.colors.background.secondary};
  > ul {
    ${cssFlex}
    list-style: none;
    width: 100%;
    flex-direction: row;
    li {
      padding: 10px 0;
      > a {
        ${cssFlex}
        justify-content: center;
        padding: 10px;
        margin: 0 15px;
      }
    }
  }

  ${props =>
    props.isDefault
      ? css`
          height: 100%;
          width: 80px;
          position: fixed;
          left: 0;
          bottom: 0;
          > ul {
            ${cssFlex}
            flex-direction: column;
          }
          @media screen and (max-width: 900px) {
            width: 100%;
            height: unset;
            > ul {
              justify-content: space-around;
              flex-direction: row;
            }
            * {
              height: 100%;
            }
          }
        `
      : css`
          background-color: transparent;
          @media screen and (max-width: 1200px) {
            background-color: ${props.theme.colors.background.secondary};
            position: fixed;
            width: 100%;
            max-width: 900px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            right: 0;
            bottom: 0;
            width: 100%;
            height: unset;
            > ul {
              justify-content: space-around;
              flex-direction: row;
            }
            * {
              height: 100%;
            }
          }
        `}
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
