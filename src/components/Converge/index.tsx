import React from 'react';
import { Container } from './styles';

interface ConvergeProps {
  isDefault?: boolean;
}
const Converge: React.FC<ConvergeProps> = ({
  children,
  isDefault
}): JSX.Element => {
  return <Container isDefault={!!isDefault}>{children}</Container>;
};

export default Converge;
