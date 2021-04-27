import styled, { css } from 'styled-components';
import { Link as LinkReactDOM } from 'react-router-dom';

interface LinkProps {
  active: string;
}
// eslint-disable-next-line prettier/prettier
export const Container = styled(LinkReactDOM) <LinkProps>`
  border-radius: 7px;
  padding: 0 10px;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.colors.hover.primary};
  }
  span {
    border-radius: 50%;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    height: 2px;
    transition: 400ms ease-in-out background-color;
  }
  ${props =>
    props.active &&
    css`
      span {
        background-color: ${props.theme.colors.icons.ternary};
      }
      svg {
        color: ${props.theme.colors.icons.ternary} !important;
      }
    `}
`;
