import React, { useState, useEffect } from "react";
import SideBar from "../componenets/Sidebar";
import NavBar from "../componenets/Navbar";
import HeroSection from "../componenets/HeroSection";
import RsvpSection from "../componenets/RsvpSection";
import MapSection from "../componenets/MapSection";
import GallerySection from "../componenets/GallerySection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryFlag, setGalleryFlag] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sectionIndicator = () => {
    if (window.innerWidth <= 720) {
      if (window.scrollY >= 650 && window.scrollY <= 2000) {
        setGalleryFlag(true);
      } else {
        setGalleryFlag(false);
      }
      console.log(window.scrollY);
    } else {
      if (window.scrollY >= 400 && window.scrollY <= 900) {
        setGalleryFlag(true);
      } else {
        setGalleryFlag(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", sectionIndicator);
  }, []);
  return (
    <>
      <NavBar toggle={toggle} gallerySectionIndicator={true} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <GallerySection isGallery={galleryFlag} />
      <RsvpSection />
      <MapSection />
    </>
  );
};

export default Home;
