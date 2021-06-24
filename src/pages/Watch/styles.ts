import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;
export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  * {
    color: #fff;
  }
  .swiper-container {
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 20px;
    }
    .swiper-button-disabled {
      display: none !important;
    }
    .swiper-slide {
      border: 1px solid #000;
      height: 100px;
    }
  }
`;
