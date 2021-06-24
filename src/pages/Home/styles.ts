import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-left: min(1.5%, 15px);
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const PostContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  padding-right: min(1.5%, 10px);
  overflow: auto;
`;
export const ChatContainer = styled.div`
  overflow: auto;
  overflow-x: hidden;
  border-radius: 8px;
  margin: 7px;

  flex: 1;
  background-color: ${props => props.theme.colors.background.quinary};
  @media screen and (max-width: 900px) {
    display: none;
  }
  h2 {
    margin-top: 10px;
    text-align: center;
    color: ${props => props.theme.colors.texts.primary};
    font-size: 15px;
  }
`;
export const Chat = styled.div`
  padding: 30px 15px;
`;
export const Reply = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.background.secondary};
    height: 1px;
    width: 100px;
    bottom: 0;
    left: 5px;
  }
  > div {
    display: flex;
    align-items: flex-start;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background-color: ${props => props.theme.colors.background.secondary};
    }
    header {
      display: flex;
      align-items: flex-start;
      div {
        display: flex;
        flex-direction: column;
        strong {
          flex: 1;
          span {
            line-height: 0;
            font-size: 14px;
            display: inline-block;
            margin-left: 10px;
            &:nth-child(2) {
              color: ${props => props.theme.colors.texts.secondary};
            }
          }
        }
        p {
          max-width: 500px;
          line-height: 12px;
          margin-left: 10px;
          font-size: 13px;
        }
      }
    }
    button {
      background-color: ${props => props.theme.colors.background.quinary};
      width: 30px;
      height: 30px;
      border-radius: 5px;
      margin-left: auto;
      box-shadow: 0 0 5px
        ${props => shade(0.3, props.theme.colors.background.secondary)};
    }
  }

  * {
    color: ${props => props.theme.colors.texts.primary};
  }
`;
export const Post = styled.div`
  overflow: hidden;
  border-radius: 10px;
  padding: 30px min(1.5%, 8px) 80px;
  background-color: ${props => props.theme.colors.background.secondary};
  max-width: 500px;
  margin-bottom: 50px;
  header {
    > div {
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
        span {
          margin-left: 10px;
          color: ${props => props.theme.colors.texts.primary};
        }
      }
      button {
        border-radius: 7px;
        width: 50px;
        height: 50px;
        box-shadow: 0 0 5px
          ${props => shade(0.3, props.theme.colors.background.secondary)};
      }
    }
    > p {
      font-size: 12px;
      margin-left: 5px;
      margin-top: 5px;
      color: ${props => props.theme.colors.texts.primary};
    }
  }
  section {
    margin-top: 10px;
    border-radius: 8px;
    overflow: hidden;
    max-height: 300px;
    > img {
      width: 100%;
    }
  }
  footer {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.texts.primary};
  }
`;
export const Status = styled.div`
  border-radius: 8px;
  padding: 10px 5px;
  box-shadow: 0 0 5px
    ${props => shade(0.3, props.theme.colors.background.secondary)};
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    &:hover {
      opacity: 0.5;
    }
    svg {
      margin-right: 7px;
    }
    &:nth-child(1) {
      svg {
        color: ${props => props.theme.colors.icons.quaternary};
      }
    }
    &:nth-child(2) {
      svg {
        color: ${props => props.theme.colors.icons.quinary};
      }
    }
    &:nth-child(3) {
      svg {
        color: ${props => props.theme.colors.icons.senary};
      }
    }
    span {
      white-space: nowrap;
      font-size: 12px;
      span {
        &:nth-last-child(1) {
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
    &:hover {
      background-color: ${props => props.theme.colors.background.secondary};
    }
  }
`;
export const AddComment = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  input {
    background-color: ${props => props.theme.colors.background.primary};

    &::placeholder {
      color: ${props => props.theme.colors.texts.secondary};
    }
    padding: 7px 15px;
    width: 100%;
    margin-left: 7px;
    border-radius: 50rem;
  }
`;
