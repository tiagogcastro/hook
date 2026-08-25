import React from 'react';
import { Container } from './styles';

interface IConvergeProps {
  width?: number;
}
const Converge: React.FC<IConvergeProps> = ({
  children,
  width
}): JSX.Element => {
  return <Container width={width || 1500}>{children}</Container>;
};

export default Converge;
