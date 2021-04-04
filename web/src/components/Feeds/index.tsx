import React, { useEffect, useState } from 'react'
import Tweet from '../Tweet'
import {
  Avatar, Banner, Container,
  DataName,
  FullName,
  Load, Profile,
  Tab, Tweets, Username, WrapperBanner,
  WrapperTweets, WrapperUser
} from './styles'

interface User {
  id: number
  login: string
  avatar_url: string
}

const Feeds: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<[User]>()
  async function getContent() {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()

    setUsers(data)
  }

  useEffect(() => {
    getContent()
  }, [])

  return (
    <Container>
      <Profile>
        <WrapperBanner>
          <Banner>
            <img src="" alt="" />
          </Banner>
        </WrapperBanner>
        <WrapperUser>
          <Avatar>
            <img src="" alt="" />
          </Avatar>
          <DataName>
            <FullName></FullName>
            <Username></Username>
          </DataName>
        </WrapperUser>
      </Profile>
      <Tweets>
        <Tab>Init Tweets</Tab>
        <WrapperTweets>
          {users ? (
            users.map((user) => (
              <Tweet
                key={user.id}
                user={user}
              />
            ))
          ) : (
            <Load>
              <svg
                width="50"
                height="50"
                viewBox="0 0 110 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M107 54.5C107 83.2188 83.7188 106.5 55 106.5C26.2812 106.5 3 83.2188 3 54.5C3 25.7812 26.2812 2.5 55 2.5C83.7188 2.5 107 25.7812 107 54.5Z"
                  strokeWidth="5"
                />
              </svg>
            </Load>
          )}
        </WrapperTweets>
      </Tweets>
    </Container>
  )
}

export default Feeds
