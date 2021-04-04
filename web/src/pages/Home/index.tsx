import React from 'react'
import Feeds from '../../components/Feeds'
import LeftNavbar from '../../components/LeftNavbar'
import SideBar from '../../components/SideBar'
import TopNavbar from '../../components/TopNavbar'
import { Container, Scroll, Wrapper } from './styles'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <TopNavbar />
      <Scroll>
        <Wrapper>
          <LeftNavbar />
          <Feeds />
          <SideBar />
        </Wrapper>
      </Scroll>
    </Container>
  )
}

export default Home
