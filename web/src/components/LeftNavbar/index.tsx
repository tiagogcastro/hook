import React from 'react';
import { AiFillHome, TiGroup } from "react-icons/all";
import {
  Container,
  Link, ListTab, NavBar,
  Tabs, Wrapper
} from './styles';


const LeftNavbar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <NavBar>
          <ListTab>
            <Tabs>
              <AiFillHome size={20} />
              <Link href="/">Home</Link>
            </Tabs>
            <Tabs>
              <TiGroup size={20} />
              <Link href="/">Groups</Link>
            </Tabs>
            <Tabs>
              {/* <VideosIcon /> */}
              <Link href="/">Videos</Link>
            </Tabs>
          </ListTab>
        </NavBar>
      </Wrapper>
    </Container>
  )
}

export default LeftNavbar
