import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'group';
}
const styles = {
  group: css`
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;

    > ul {
      max-width: 700px;
      justify-content: space-around;
      li {
        box-shadow: 0 0 5px
          ${props => shade(0.3, props.theme.colors.background.secondary)};
      }
    }
  `,
  default: css`
    > ul {
      flex-direction: column;
      li {
        margin-top: 20px;
        box-shadow: 0 0 5px
          ${props => shade(0.3, props.theme.colors.background.secondary)};
      }
    }
  `
};
const cssOverlay = css`
  position: relative;
  z-index: 4;
`;
const cssFlex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.nav<ContainerProps>`
  ${cssOverlay}
  box-shadow: 0 0 5px
      ${props => shade(0.1, props.theme.colors.background.secondary)};
  background-color: ${props => props.theme.colors.background.secondary};
  ${props => styles[props.type || 'default']}
  > ul {
    ${cssFlex}
    list-style: none;
    width: 100%;

    li {
      border-radius: 10px;
      background-color: ${props => props.theme.colors.background.secondary};
      padding: 10px 0;
      > a {
        ${cssFlex}
        justify-content: center;
        padding: 10px;
        margin: 0 15px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    background-color: ${props => props.theme.colors.background.secondary};
    position: fixed;
    width: 100%;
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
`;
