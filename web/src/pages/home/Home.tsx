import React from 'react'
import { Container, Scroll,Wrapper } from './sHome'
import TopNavbar from '@components/global/topNavbar/Navbar'
import LeftNavbar from '@components/home/leftNavbar/LeftNavbar'
import Feeds from '@components/home/feeds/Feeds'
import SideBar from '@components/home/sideBar/SideBar'

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
