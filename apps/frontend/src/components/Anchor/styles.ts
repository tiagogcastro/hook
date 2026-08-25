import styled, { css } from 'styled-components';
import { Link as LinkReactDOM } from 'react-router-dom';

interface LinkProps {
  isActive: boolean;
}

export const Container = styled(LinkReactDOM)`
  border-radius: 7px;
  padding: 0 10px;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.colors.hover.primary};
  }
`;
export const NavigationAnchor = styled.div<LinkProps>`
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
    props.isActive &&
    css`
      span {
        background-color: ${props.theme.colors.icons.ternary};
      }
      svg {
        color: ${props.theme.colors.icons.ternary} !important;
      }
    `}
`;
