import styled from "styled-components";
import { animated } from "react-spring";

export const GallerySectionContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    height: 2000px;
  }
`;

export const ImagesContainer = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  grid-gap: 1em;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled(animated.div)`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const ImgWrap = styled(animated.div)``;

export const Img = styled(animated.img)`
  width: 350px;
  height: 300px;
`;
