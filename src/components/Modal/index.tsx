import React, {
  forwardRef,
  HtmlHTMLAttributes,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';
import { Container } from './styles';

export interface ModalHandles {
  closeModal: () => void;
  openModal: () => void;
}
const Modal: React.ForwardRefRenderFunction<
  ModalHandles,
  HtmlHTMLAttributes<HTMLDivElement>
> = ({ children }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, []);
  const openModal = useCallback(() => {
    setIsVisible(true);
  }, []);
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

  if (!isVisible) return null;

  return (
    <Container>
      <button type="button" onClick={handleCloseModal}>
        Fechar modal
      </button>
      <div>{children}</div>
    </Container>
  );
};

export default forwardRef(Modal);
