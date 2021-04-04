import React from 'react'
import {
  Container,
  Data,
  Name,
  UserAvatar, UserData,
  UserDescription,
  UserImage,
  UserInfo, UserName,
  Wrapper
} from './styles'

interface User {
  user: {
    login: string
    avatar_url: string
    id: number

  }
}
const Tweet: React.FC<User> = ({ user: { avatar_url, login, id } }): JSX.Element => {
  // init Gambiarra : - (
  const description = 'Hello world!'

  const qtdd_comment = 5
  const qtdd_share = 10
  // end
  return (
    <Container >
      <UserData >
        <UserAvatar >
          <img src={avatar_url} alt={login} />
        </UserAvatar>
        <UserName>
          <Name >{login}</Name>
          <UserDescription >{description}</UserDescription>
        </UserName>
      </UserData>
      <UserImage>
        <div></div>
      </UserImage>

      <UserInfo>
        <Wrapper>
          {/* <LikeIcon /> */}
          <Data>
            <span >{id}</span>
            <span >
              {id > 1 ? 'Curtidas' : 'Curtida'}
            </span>
          </Data>
        </Wrapper>
        <Wrapper>
          {/* <CommentIcon /> */}
          <Data>
            <span >{qtdd_comment}</span>
            <span >
              {qtdd_comment > 1 ? 'Comentários' : 'Comentário'}
            </span>
          </Data>
        </Wrapper>

        <Wrapper>
          {/* <ShareIcon /> */}
          <Data>
            <span >{qtdd_share}</span>
            <span >
              {qtdd_share > 1 ? 'Compartilhamentos' : 'Compartilhamento'}
            </span>
          </Data>
        </Wrapper>
      </UserInfo>
    </Container>
  )
}

export default Tweet
