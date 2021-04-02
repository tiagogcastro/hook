import React from 'react'
import {
   Container,
   Wrapper,
   Padding,
   LogoIcon,
   NavbarN,
   NavbarTab,
   NavbarTabEl,
   HomeIcon,
   GroupsIcon,
   Align,
} from './sNavbar'
import { Link } from 'react-router-dom'
const Navbar = (): JSX.Element => {
   function handleClick({ currentTarget }) {
      const tabs = document.querySelectorAll('.active-unq')
      tabs.foreach((tab) => {
         tab.classList.remove('active-unq')
      })
      currentTarget.classList.add('active-unq')
   }
   return (
      <>
         <Container>
            <Wrapper>
               <Link to="/">
                  <LogoIcon />
               </Link>
               <NavbarN>
                  <NavbarTab>
                     <NavbarTabEl className="active-unq" onClick={handleClick}>
                        <Link to="/">
                           <Align>
                              <HomeIcon />
                           </Align>
                        </Link>
                     </NavbarTabEl>
                     <NavbarTabEl onClick={(e) => 'ok'}>
                        <Link to="/groups">
                           <Align>
                              <GroupsIcon />
                           </Align>
                        </Link>
                     </NavbarTabEl>
                  </NavbarTab>
               </NavbarN>
            </Wrapper>
         </Container>
         <Padding />
      </>
   )
}

export default Navbar
