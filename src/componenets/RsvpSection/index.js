import React, { useState } from "react";

import {
  SectionContainer,
  InputContainer,
  Input,
  SliderContainer,
  LabelContainer,
  Label,
  Slider,
  H1,
  Button,
} from "./RsvpElements";

const RsvpSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addNewApproval = () => {
    const data = {
      firstName: firstName,
      familyName: lastName,
      quantity: quantity,
    };
    fetch("https://arikz-rsvp.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <SectionContainer id="confirm">
        <H1>אישור הגעה</H1>
        <InputContainer>
          <Input
            placeholder="שם פרטי"
            onChange={(textInput) => {
              setFirstName(textInput.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="שם משפחה"
            onChange={(textInput) => {
              setLastName(textInput.target.value);
            }}
          />
        </InputContainer>
        <SliderContainer>
          <LabelContainer>
            <Label>כמות מגיעים</Label>
          </LabelContainer>
          <Slider
            type="range"
            min="1"
            max="10"
            onChange={(silderValue) => {
              setQuantity(silderValue.target.value);
            }}
          />
          <LabelContainer>
            <Label>{quantity}</Label>
          </LabelContainer>
        </SliderContainer>
        <Button onClick={addNewApproval}>אישור הגעה</Button>
      </SectionContainer>
    </>
  );
};

export default RsvpSection;
