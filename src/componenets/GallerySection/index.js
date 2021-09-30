import React from "react";
import { GallerySectionContainer, ImagesContainer } from "./GalleryElements";

import CardImage from "./CardImage";
import img1 from "../../images/wedding1.jpg";
import img2 from "../../images/wedding2.jpg";
import img3 from "../../images/wedding3.jpg";
import img4 from "../../images/wedding4.jpg";
import img5 from "../../images/wedding5.jpg";
import img6 from "../../images/wedding6.jpg";

const GallerySection = (props) => {
  return (
    <GallerySectionContainer id="gallery">
      <h1>גלריה</h1>
      <ImagesContainer>
        <CardImage src={img1} delay={0} visible={props.isGallery} />
        <CardImage src={img2} delay={200} visible={props.isGallery} />
        <CardImage src={img3} delay={400} visible={props.isGallery} />
        <CardImage src={img4} delay={600} visible={props.isGallery} />
        <CardImage src={img5} delay={800} visible={props.isGallery} />
        <CardImage src={img6} delay={1000} visible={props.isGallery} />
      </ImagesContainer>
    </GallerySectionContainer>
  );
};

export default GallerySection;
