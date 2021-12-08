import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

interface UniqueOverlayProps {
  children: ReactNode;
}

const UniqueOverlay: React.FC = () => {
  const { scrollProgess } = useWrapperScroll()

  const opacity = useTransform(scrollProgess, [0.9, 1], [0, 1])
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with</a>
          </li>
          <li>
            <a href="#">by Tony Sandro</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
