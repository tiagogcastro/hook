/* eslint-disable prettier/prettier */
import Anchor from 'components/Anchor';
import Avatar from 'components/Avatar';
import Converge from 'components/Converge';
import Modal, { ModalHandles } from 'components/Modal';
import Switch from 'components/Switch';
import React, { useCallback, useRef, useState } from 'react';
import {
  CgHomeScreen,
  FaPhotoVideo,
  FiMessageCircle,
  GoTriangleDown,
  IoNotificationsOutline,
  IoSearchOutline,
  TiGroup
} from 'react-icons/all';
import { useTheme } from 'styled-components';
import {
  Container,
  Encapsulate,
  Information,
  Navigation,
  Rearrange,
  Research,
  UserProfileButton
} from './styles';

interface AnchorIcons {
  homeIcon?: boolean,
  groupIcon?: boolean,
  videoIcon?: boolean,
}
const Header: React.FC = () => {
  const {
    colors: {
      texts: { primary: textColorPrimary },
      icons: { primary: iconColorPrimary }
    }
  } = useTheme();
  const [isActive, setIsActive] = useState<AnchorIcons>({
    homeIcon: true,
    groupIcon: false,
    videoIcon: false,
  });

  const messageModalRef = useRef<ModalHandles>(null)
  const notificationModalRef = useRef<ModalHandles>(null)
  const triangleDownModalRef = useRef<ModalHandles>(null)

  const handleOpenMessageModal = useCallback(() => {
    triangleDownModalRef.current?.closeModal()
    notificationModalRef.current?.closeModal()
    messageModalRef.current?.openModal()
  }, [])

  const handleOpenNotificationModal = useCallback(() => {
    triangleDownModalRef.current?.closeModal()
    messageModalRef.current?.closeModal()
    notificationModalRef.current?.openModal()
  }, [])

  const handleOpenTriangleDownModal = useCallback(() => {
    notificationModalRef.current?.closeModal()
    messageModalRef.current?.closeModal()
    triangleDownModalRef.current?.openModal()
  }, [])
  return (
    <Container>
      <Converge>
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
                <Anchor
                  to="/"
                  active={isActive.homeIcon}
                  onClick={() => {
                    setIsActive({
                      homeIcon: true
                    })
                  }}
                  icon={{
                    component: CgHomeScreen,
                    color: iconColorPrimary,
                    size: 30
                  }} />
              </li>

              <li>
                <Anchor
                  to="/groups"
                  active={isActive.groupIcon}
                  onClick={() => {
                    setIsActive({
                      groupIcon: true
                    })
                  }}
                  icon={{
                    component: TiGroup,
                    color: iconColorPrimary,
                    size: 30
                  }} />
              </li>
              <li>
                <Anchor
                  to="/watch"
                  active={isActive.videoIcon}
                  onClick={() => {
                    setIsActive({
                      videoIcon: true
                    })
                  }}
                  icon={{
                    component: FaPhotoVideo,
                    color: iconColorPrimary,
                    size: 30
                  }} />
              </li>
            </ul>
          </Navigation>

          <Information>
            <UserProfileButton to="/profile">
              <Avatar size={30} />
              <span>@username</span>
            </UserProfileButton>

            <Encapsulate>
              <Modal ref={messageModalRef}>1</Modal>
              <button type="button" onClick={handleOpenMessageModal}>
                <FiMessageCircle color={textColorPrimary} size={20} />
              </button>


              <Modal ref={notificationModalRef}>2</Modal>
              <button type="button" onClick={handleOpenNotificationModal}>
                <IoNotificationsOutline color={textColorPrimary} size={20} />
              </button>

              <Modal ref={triangleDownModalRef}>3</Modal>
              <button type="button" onClick={handleOpenTriangleDownModal}>
                <GoTriangleDown color={textColorPrimary} size={20} />
              </button>
            </Encapsulate>
            <Switch />
          </Information>
        </Rearrange>
      </Converge>
    </Container>
  );
};

export default Header;
