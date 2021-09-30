import React from "react";
import { CardWrapper, ImgWrap, Img } from "./GalleryElements";
import { useTransition, animated } from "react-spring";

const CardImage = (props) => {
  return (
    <CardWrapper>
      <ImgWrap>
        <Img src={props.src} />
      </ImgWrap>
    </CardWrapper>
  );
};

export default CardImage;

/*
const transitions = useTransition(props.visible, {
    from: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 200 },
    delay: props.delay,
  });
  return transitions((styles, item) =>
    item ? (
      <animated.div style={styles}>
        <CardWrapper>
          <ImgWrap>
            <Img src={props.src} />
          </ImgWrap>
        </CardWrapper>
      </animated.div>
    ) : (
      ""
    )
  );
*/
