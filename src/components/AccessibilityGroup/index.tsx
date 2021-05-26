import Anchor from 'components/Anchor';
import React, { useEffect, useState } from 'react';
import { CgHomeScreen } from 'react-icons/cg';
import { FaPhotoVideo } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface AnchorIcons {
  homeIcon?: boolean;
  groupIcon?: boolean;
  videoIcon?: boolean;
}
interface AccessibilityGroupProps {
  type?: 'group';
}
const AccessibilityGroup: React.FC<AccessibilityGroupProps> = ({ type }) => {
  const {
    colors: {
      icons: { primary: iconColorPrimary }
    }
  } = useTheme();

  const [isActive, setIsActive] = useState<AnchorIcons>({
    homeIcon: false,
    groupIcon: false,
    videoIcon: false
  });

  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case '/':
        setIsActive({
          homeIcon: true
        });
        break;

      case '/groups':
        setIsActive({
          groupIcon: true
        });
        break;

      case '/watch':
        setIsActive({
          videoIcon: true
        });
        break;
      default:
        setIsActive({});
        break;
    }
  }, [pathname]);

  return (
    <Container type={type}>
      <ul>
        <li>
          <Anchor
            to="/"
            active={isActive.homeIcon}
            icon={{
              component: CgHomeScreen,
              color: iconColorPrimary,
              size: 30
            }}
          />
        </li>

        <li>
          <Anchor
            to="/groups"
            active={isActive.groupIcon}
            icon={{
              component: TiGroup,
              color: iconColorPrimary,
              size: 30
            }}
          />
        </li>
        <li>
          <Anchor
            to="/watch"
            active={isActive.videoIcon}
            icon={{
              component: FaPhotoVideo,
              color: iconColorPrimary,
              size: 30
            }}
          />
        </li>
      </ul>
    </Container>
  );
};

export default AccessibilityGroup;
