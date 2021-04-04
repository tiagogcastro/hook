import React from 'react'
import {
   Container,
   Wrapper,
  //  LogoIcon,
   Navbar,
   NavbarTab,
   NavbarTabEl,
   Align,
} from './styles'

import { Link } from 'react-router-dom'

const TopNavbar = (): JSX.Element => {
   return (
      <>
         <Container>
            <Wrapper>
               <Link to="/">
                  {/* <LogoIcon /> */}
               </Link>
               <Navbar>
                  <NavbarTab>
                     <NavbarTabEl >
                        <Link to="/">
                           <Align>
                              {/* <HomeIcon /> */}
                           </Align>
                        </Link>
                     </NavbarTabEl>
                     <NavbarTabEl >
                        <Link to="/groups">
                           <Align>
                              {/* <GroupsIcon /> */}
                           </Align>
                        </Link>
                     </NavbarTabEl>
                  </NavbarTab>
               </Navbar>
            </Wrapper>
         </Container>         
      </>
 )
}

export default TopNavbar
