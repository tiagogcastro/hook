import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  width: 100%;
  max-width: 50px;
`;
export const Wrapper = styled.button`
  position: relative;
  padding: 2px;
  border: 1px solid ${props => props.theme.colors.switch.border.type1};
  box-shadow: 0 0 10px ${props => props.theme.colors.switch.shadow.type1};
  background-color: ${props => props.theme.colors.switch.background.type1};
  border-radius: 50rem;
  height: 50px;
  width: 100%;
  &:active {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        height: 90%;
      }
    }
  }
  div {
    border: 2px solid ${props => props.theme.colors.switch.border.type2};
    box-shadow: inset 0 2px 3px
      ${props => props.theme.colors.switch.shadow.type2} inset 0 -5px 5px ${props => props.theme.colors.switch.shadow.type1};
  }
`;
export const Ball = styled.div`
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.switch.border.type3};
  border-radius: 50rem;
  background-color: ${props => props.theme.colors.switch.background.type1};
  box-shadow: inset 0 2px 3px ${props => props.theme.colors.switch.shadow.type1},
    inset 0 -5px 5px ${props => props.theme.colors.switch.shadow.type2};

  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
