import styled, { css } from 'styled-components';
import { Link as LinkReactDOM } from 'react-router-dom';

interface LinkProps {
  active?: boolean;
}
const cssFlex = css`
  display: flex;
  align-items: center;
`;
export const Container = styled.header`
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.texts.primary};
`;
export const Rearrange = styled.div`
  ${cssFlex}
  height: 100%;
  justify-content: space-between;
`;
export const Research = styled.div`
  ${cssFlex}
  > input {
    margin-left: 15px;

    width: 200px;
    padding: 5px;
    border-radius: 50rem;
  }
`;
export const Navigation = styled.nav`
  ${cssFlex}
  height: 100%;
  * {
    height: 100%;
  }
  > ul {
    display: flex;

    list-style: none;
    li {
      padding: 10px 0;
      margin: 0 15px;
    }
  }
`;

// eslint-disable-next-line prettier/prettier
export const Link = styled(LinkReactDOM) <LinkProps>`
  border-radius: 7px;
  padding: 0 10px;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.colors.hover.primary};
  }
  ${props =>
    props.active &&
    css`
      span {
        border-radius: 50%;
        left: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        display: block;
        height: 2px;
        background-color: ${props.theme.colors.icons.ternary};
      }
      svg {
        color: ${props.theme.colors.icons.ternary} !important;
      }
    `}
`;

export const Information = styled.div`
  ${cssFlex}
`;
export const UserProfileButton = styled(LinkReactDOM)`
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
`;

export const Encapsulate = styled.div`
  ${cssFlex}
  margin-right: 10px;
  button {
    ${cssFlex}
    justify-content: center;
    margin: 0 3px;
    background-color: ${props => props.theme.colors.icons.background.primary};
    border-radius: 50rem;
    width: 35px;
    height: 35px;
  }
`;
