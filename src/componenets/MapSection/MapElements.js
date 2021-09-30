import styled from "styled-components";

export const MapSectionContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;

  direction: rtl;
  align-items: center;
  height: 900px;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
