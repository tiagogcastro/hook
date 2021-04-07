import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  width: 100%;
  max-width: 50px;
`;
export const Wrapper = styled.button`
  position: relative;
  padding: 2px;
  border: 1px solid ${props => props.theme.colors.switch.border.primary};
  box-shadow: 0 0 3px ${props => props.theme.colors.switch.shadow.primary};
  background-color: ${props => props.theme.colors.switch.background.primary};
  border-radius: 50rem;
  height: 50px;
  width: 100%;
  &:active {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 90%;
        height: 90%;
      }
    }
  }
  div {
    border: 2px solid ${props => props.theme.colors.switch.border.secondary};
  }
`;
export const Ball = styled.div`
  border: 2px solid ${props => props.theme.colors.switch.border.ternary};
  border-radius: 50rem;
  background-color: ${props => props.theme.colors.switch.background.primary};
  box-shadow: inset 0 2px 3px
      ${props => props.theme.colors.switch.shadow.ternary},
    inset 0 -5px 5px ${props => props.theme.colors.switch.shadow.secondary};
  padding: 10px;
  height: 100%;
  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;
