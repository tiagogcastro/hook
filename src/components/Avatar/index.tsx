import React, { HtmlHTMLAttributes } from 'react';
import defaultAvatar from 'static/default-avatar.jpg';
import { Container } from './styles';

interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size: number;
  src?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, src, alt, ...rest }) => {
  return (
    <Container size={size} {...rest}>
      <img src={src || defaultAvatar} alt={alt} />
    </Container>
  );
};

export default Avatar;
