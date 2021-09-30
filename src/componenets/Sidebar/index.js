import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="home" onClick={toggle} smooth={true} offset={-80}>
            בית
          </SideBarLink>
          <SideBarLink to="gallery" onClick={toggle} smooth={true} offset={-80}>
            גלריה
          </SideBarLink>
          <SideBarLink to="confirm" onClick={toggle} smooth={true} offset={-80}>
            אישור הגעה
          </SideBarLink>
          <SideBarLink to="map" onClick={toggle} smooth={true} offset={-80}>
            מפה
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
