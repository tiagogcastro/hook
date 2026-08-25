import AccessibilityGroup from 'components/AccessibilityGroup';
import Header from 'components/Header';
import React from 'react';
import { FiPower } from 'react-icons/fi';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Content, ContentContainer } from './styles';

SwiperCore.use([Navigation]);

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <AccessibilityGroup />
        <Content>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            allowTouchMove
            breakpoints={{
              760: {
                slidesPerView: 3
              },
              600: {
                slidesPerView: 2
              }
            }}
            effect="coverflow"
          >
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
            <SwiperSlide>
              <FiPower />
            </SwiperSlide>
          </Swiper>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Home;
