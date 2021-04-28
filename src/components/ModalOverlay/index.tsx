import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ModalOverlayProps extends ButtonHTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
}
const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  isVisible,
  ...rest
}) => {
  return (
    <Container isVisible={isVisible} {...rest}>
      {children}
    </Container>
  );
};

export default ModalOverlay;
