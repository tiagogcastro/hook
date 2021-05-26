import Avatar from 'components/Avatar';
import Converge from 'components/Converge';
import Modal, { ModalHandles } from 'components/ModalOverlay/Modal';
import Switch from 'components/Switch';
import React, { useCallback, useRef } from 'react';
import {
  FiMessageCircle,
  FiSettings,
  GoTriangleDown,
  IoNotificationsOutline,
  IoSearchOutline
} from 'react-icons/all';
import { useTheme } from 'styled-components';
import {
  Container,
  Encapsulate,
  Information,
  ModalContainer,
  Rearrange,
  Research,
  UserProfileButton
} from './styles';

type ModalTypes = 'triangleDown' | 'notification' | 'settings' | 'message';

const Header: React.FC = () => {
  const {
    colors: {
      texts: { primary: textColorPrimary },
      icons: { primary: iconColorPrimary }
    }
  } = useTheme();

  const messageModalRef = useRef<ModalHandles>(null);
  const notificationModalRef = useRef<ModalHandles>(null);
  const triangleDownModalRef = useRef<ModalHandles>(null);
  const settingsModalRef = useRef<ModalHandles>(null);

  const handleOpenModal = useCallback((type: ModalTypes) => {
    messageModalRef.current?.closeModal();
    notificationModalRef.current?.closeModal();
    triangleDownModalRef.current?.closeModal();
    settingsModalRef.current?.closeModal();

    switch (type) {
      case 'message':
        messageModalRef.current?.openModal();

        break;
      case 'notification':
        notificationModalRef.current?.openModal();

        break;
      case 'triangleDown':
        triangleDownModalRef.current?.openModal();

        break;
      case 'settings':
        settingsModalRef.current?.openModal();

        break;
      default:
        break;
    }
  }, []);

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

          <Information>
            <UserProfileButton to="/profile">
              <Avatar size={30} />
              <span>@username</span>
            </UserProfileButton>

            <Encapsulate>
              <ModalContainer>
                <Modal ref={messageModalRef}>1</Modal>
                <button
                  type="button"
                  onClick={() => handleOpenModal('message')}
                >
                  <FiMessageCircle color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
              <ModalContainer>
                <Modal ref={notificationModalRef}>2</Modal>
                <button
                  type="button"
                  onClick={() => handleOpenModal('notification')}
                >
                  <IoNotificationsOutline color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
              <ModalContainer>
                <Modal ref={triangleDownModalRef}>3</Modal>
                <button
                  type="button"
                  onClick={() => handleOpenModal('triangleDown')}
                >
                  <GoTriangleDown color={textColorPrimary} size={20} />
                </button>
              </ModalContainer>
              <ModalContainer>
                <Modal ref={settingsModalRef}>4</Modal>
                <button
                  type="button"
                  onClick={() => handleOpenModal('settings')}
                >
                  <FiSettings color={textColorPrimary} size={15} />
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
