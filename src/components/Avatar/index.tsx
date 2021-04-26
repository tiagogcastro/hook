import React, { HtmlHTMLAttributes } from 'react';
import { Container } from './styles';

interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ size, ...rest }) => {
  return <Container size={size} {...rest} />;
};

export default Avatar;
