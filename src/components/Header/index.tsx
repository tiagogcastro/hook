import Centralize from 'components/Centralize';
import Switch from 'components/Switch';
import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import React, { useContext } from 'react';
import {
  BiChat,
  HiHome,
  IoSearchOutline,
  MdVideoLibrary,
  TiGroup
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  LayerLeft,
  LayerMiddle,
  LayerRight,
  Layers,
  SearchBar
} from './styles';

const Header: React.FC = (): JSX.Element => {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <Container>
      <Centralize>
        <Layers>
          <LayerLeft>
            <button type="button">
              <IoSearchOutline size={25} color={theme.colors.icons.primary} />
            </button>
            <SearchBar>
              <input type="text" />
            </SearchBar>
          </LayerLeft>
          <LayerMiddle>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <HiHome size={25} color={theme.colors.icons.primary} />
                  </Link>
                </li>
                <li>
                  <Link to="/groups">
                    <TiGroup size={25} color={theme.colors.icons.primary} />
                  </Link>
                </li>
                <li>
                  <Link to="/watch">
                    <MdVideoLibrary
                      size={25}
                      color={theme.colors.icons.primary}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </LayerMiddle>
          <LayerRight>
            <Box>
              <Link to="/messages">
                <BiChat size={30} color={theme.colors.icons.primary} />
              </Link>
            </Box>
            <Box>
              <Switch />
            </Box>
          </LayerRight>
        </Layers>
      </Centralize>
    </Container>
  );
};

export default Header;
