import styled from "styled-components";

export const SectionContainer = styled.div`
  background: #fff;
  display: flex;
  background: #f4f1de;
  align-items: center;
  justify-content: center;
  direction: rtl;
  flex-flow: column;
  height: 700px;
  z-index: 1;
`;

export const H1 = styled.h1``;

export const InputContainer = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 3px solid #555;
    border-color: #01bf71;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 10px;
  align-items: center;
  justify-content: center;
  display: block;
`;

export const Slider = styled.input`
  direction: rtl;
  -webkit-appearance: none;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  background: #01bf71;
  outline: none;
  opacity: 0.2;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  color: #01bf71;

  &:hover {
    opacity: 0.5;
  }

  :-moz-range-thumb {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    color: #010606;
  }
`;
