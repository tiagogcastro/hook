import Avatar from 'components/Avatar';
import Centralize from 'components/Centralize';
import Switch from 'components/Switch';
import React from 'react';
import {
  IoSearchOutline,
  CgHomeScreen,
  TiGroup,
  FaPhotoVideo,
  IoNotificationsOutline,
  GoTriangleDown,
  FiMessageCircle
} from 'react-icons/all';
import { useTheme } from 'styled-components';
import {
  Container,
  Rearrange,
  Research,
  Navigation,
  Information,
  UserProfileButton,
  Encapsulate,
  Link
} from './styles';

const Header: React.FC = () => {
  const {
    colors: {
      texts: { primary: textColorPrimary },
      icons: { primary: iconColorPrimary }
    }
  } = useTheme();
  return (
    <Container>
      <Centralize>
        <Rearrange>
          <Research>
            <button type="submit">
              <IoSearchOutline color={iconColorPrimary} size={20} />
            </button>
            <input type="search" />
          </Research>

          <Navigation>
            <ul>
              <li>
                <Link active to="/">
                  <CgHomeScreen color={iconColorPrimary} size={30} />
                  <span />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <TiGroup color={iconColorPrimary} size={30} />
                  <span />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaPhotoVideo color={iconColorPrimary} size={30} />
                  <span />
                </Link>
              </li>
            </ul>
          </Navigation>

          <Information>
            <UserProfileButton to="/">
              <Avatar size={30} />
              <span>@username</span>
            </UserProfileButton>

            <Encapsulate>
              <button type="button">
                <FiMessageCircle color={textColorPrimary} size={20} />
              </button>

              <button type="button">
                <IoNotificationsOutline color={textColorPrimary} size={20} />
              </button>

              <button type="button">
                <GoTriangleDown color={textColorPrimary} size={20} />
              </button>
            </Encapsulate>
            <Switch />
          </Information>
        </Rearrange>
      </Centralize>
    </Container>
  );
};

export default Header;
