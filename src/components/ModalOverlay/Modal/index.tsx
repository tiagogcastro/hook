import React, {
  forwardRef,
  HtmlHTMLAttributes,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';
import { IconType } from 'react-icons/lib';
import { CgClose } from 'react-icons/all';
import ModalOverlay from '..';
import { Container, Content } from './styles';

export interface ModalHandles {
  closeModal: () => void;
  openModal: () => void;
}
interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon?: {
    component: IconType;
    color: string;
    size: number;
  };
}
const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { icon, children, ...rest },
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, []);
  const openModal = useCallback(() => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
  }, [isVisible]);
  const handleCloseModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { closeModal, openModal };
    },
    [closeModal, openModal]
  );

  return (
    <>
      <ModalOverlay isVisible={isVisible} onClick={handleCloseModal} />
      <Container isVisible={isVisible} {...rest}>
        <button type="button" onClick={handleCloseModal}>
          {icon ? (
            <icon.component size={icon.size} color={icon.color} />
          ) : (
            <CgClose size={20} color="#333" />
          )}
        </button>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default forwardRef(Modal);
