import Anchor from 'components/Anchor';
import Avatar from 'components/Avatar';
import Converge from 'components/Converge';
import Modal, { ModalHandles } from 'components/ModalOverlay/Modal';
import Switch from 'components/Switch';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  CgHomeScreen,
  FaPhotoVideo,
  FiMessageCircle,
  GoTriangleDown,
  IoNotificationsOutline,
  IoSearchOutline,
  TiGroup
} from 'react-icons/all';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import {
  Container,
  Encapsulate,
  Information,
  Navigation,
  Rearrange,
  Research,
  ModalContainer,
  UserProfileButton
} from './styles';

interface AnchorIcons {
  homeIcon?: boolean;
  groupIcon?: boolean;
  videoIcon?: boolean;
}
interface HeaderProps {
  isDefault?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isDefault = false }) => {
  const {
    colors: {
      texts: { primary: textColorPrimary },
      icons: { primary: iconColorPrimary }
    }
  } = useTheme();
  const [isActive, setIsActive] = useState<AnchorIcons>({
    homeIcon: false,
    groupIcon: false,
    videoIcon: false
  });

  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case '/':
        setIsActive({
          homeIcon: true
        });
        break;

      case '/groups':
        setIsActive({
          groupIcon: true
        });
        break;

      case '/watch':
        setIsActive({
          videoIcon: true
        });
        break;
      default:
        setIsActive({});
        break;
    }
  }, [pathname]);

  const messageModalRef = useRef<ModalHandles>(null);
  const notificationModalRef = useRef<ModalHandles>(null);
  const triangleDownModalRef = useRef<ModalHandles>(null);

  const handleOpenMessageModal = useCallback(() => {
    triangleDownModalRef.current?.closeModal();
    notificationModalRef.current?.closeModal();
    messageModalRef.current?.openModal();
  }, []);

  const handleOpenNotificationModal = useCallback(() => {
    triangleDownModalRef.current?.closeModal();
    messageModalRef.current?.closeModal();
    notificationModalRef.current?.openModal();
  }, []);

  const handleOpenTriangleDownModal = useCallback(() => {
    notificationModalRef.current?.closeModal();
    messageModalRef.current?.closeModal();
    triangleDownModalRef.current?.openModal();
  }, []);

  return (
    <Container>
      <Converge isDefault={isDefault}>
        <Rearrange>
          <Research>
            <button type="submit">
              <IoSearchOutline color={iconColorPrimary} size={20} />
            </button>
            <input type="search" />
          </Research>
          <Navigation isDefault={isDefault}>
            <ul>
              <li>
                <Anchor
                  to="/"
                  active={isActive.homeIcon}
                  icon={{
                    component: CgHomeScreen,
                    color: iconColorPrimary,
                    size: 30
                  }}
                />
              </li>

              <li>
                <Anchor
                  to="/groups"
                  active={isActive.groupIcon}
                  icon={{
                    component: TiGroup,
                    color: iconColorPrimary,
                    size: 30
                  }}
                />
              </li>
              <li>
                <Anchor
                  to="/watch"
                  active={isActive.videoIcon}
                  icon={{
                    component: FaPhotoVideo,
                    color: iconColorPrimary,
                    size: 30
                  }}
                />
              </li>
            </ul>
          </Navigation>

          <Information>
            <UserProfileButton to="/profile">
              <Avatar size={30} />
              <span>@username</span>
            </UserProfileButton>

            <Encapsulate>
              <ModalContainer>
                <Modal ref={messageModalRef}>1</Modal>
                <button type="button" onClick={handleOpenMessageModal}>
                  <FiMessageCircle color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
              <ModalContainer>
                <Modal ref={notificationModalRef}>2</Modal>
                <button type="button" onClick={handleOpenNotificationModal}>
                  <IoNotificationsOutline color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
              <ModalContainer>
                <Modal ref={triangleDownModalRef}>3</Modal>
                <button type="button" onClick={handleOpenTriangleDownModal}>
                  <GoTriangleDown color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
            </Encapsulate>
            <Switch />
          </Information>
        </Rearrange>
      </Converge>
    </Container>
  );
};

export default Header;
