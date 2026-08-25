import AccessibilityGroup from 'components/AccessibilityGroup';
import Button from 'components/Button';
import Converge from 'components/Converge';
import Header from 'components/Header';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from 'styled-components';
import {
  Card,
  CardContainer,
  Container,
  Content,
  Group,
  GroupNest,
  GroupsContainer,
  GroupSettings
} from './styles';

const Home: React.FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <GroupsContainer>
        <GroupNest>
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
        </GroupNest>
        <GroupSettings>
          <button type="button">
            <FiPlus size={50} color={colors.icons.ternary} />
          </button>
        </GroupSettings>
      </GroupsContainer>
      <AccessibilityGroup type="group" />

      <Content>
        <Converge width={1100}>
          <h2>Grupos Disponíveis</h2>
          <CardContainer>
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              navigation
              allowTouchMove
              breakpoints={{
                1100: {
                  slidesPerView: 4
                },
                800: {
                  slidesPerView: 3
                },
                600: {
                  slidesPerView: 2
                }
              }}
              effect="coverflow"
            >
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1588090207599-93588c59b9c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1591826246299-9113fd782020?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1571327352610-1c5484ccc840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <header>
                    <img
                      src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                    />
                  </header>
                  <section>
                    <h2>Group Name</h2>
                    <span>55 mil membros</span>

                    <Button>+ Participar</Button>
                  </section>
                </Card>
              </SwiperSlide>
            </Swiper>
          </CardContainer>
        </Converge>
      </Content>
    </Container>
  );
};

export default Home;
