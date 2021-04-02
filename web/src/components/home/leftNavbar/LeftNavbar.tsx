import React from 'react'
import {
   Container,
   Wrapper,
   NavBar,
   ListTab,
   Tabs,
   HomeIcon,
   Link,
   GroupsIcon,
   VideosIcon,
} from './sLeftNavbar'
const LeftNavbar: React.FC = (): JSX.Element => {
   return (
      <Container>
         <Wrapper>
            <NavBar>
               <ListTab>
                  <Tabs>
                     <HomeIcon />
                     <Link href="/">Home</Link>
                  </Tabs>
                  <Tabs>
                     <GroupsIcon />
                     <Link href="/">Groups</Link>
                  </Tabs>
                  <Tabs>
                     <VideosIcon />
                     <Link href="/">Videos</Link>
                  </Tabs>
               </ListTab>
            </NavBar>
         </Wrapper>
      </Container>
   )
}

export default LeftNavbar
