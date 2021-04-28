import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { LinkProps } from 'react-router-dom';
import { Container, NavigationAnchor } from './styles';

interface AnchorProps extends LinkProps {
  color?: string;
  active?: boolean;
  icon: {
    component: React.FC<IconBaseProps>;
    size: number;
    color: string;
  };
}

const Anchor: React.FC<AnchorProps> = ({
  to,
  active,
  icon: { component: Icon, ...r },
  ...rest
}) => {
  return (
    <Container to={to} {...rest}>
      <NavigationAnchor isActive={!!active}>
        <Icon {...r} />
        <span />
      </NavigationAnchor>
    </Container>
  );
};
export default Anchor;
