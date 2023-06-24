import React from 'react';
import {Container} from "@mui/material";
import ImageTextComponent from "./ImageTextComponent";
import backWheel from "../assets/backWheel.png";
import frontWheel from "../assets/frontWheel.png";
import Section from "./Section";
function Wheels() {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0',
    margin: '0',
   color: '#fff',
      background :"pink"
  };
  return (
      <Section backgroundColor={"linear-gradient(to bottom, #000, #222)"}>
      <Container sx={{
          padding: '0',
      }} >
        <h1>Wheels</h1>
        <ImageTextComponent
            maxWidth="400"
            title={"Title"}
            image={frontWheel}
            text="Text 1"
            align="left"
        />
        <ImageTextComponent
            maxWidth="400"
            image={backWheel}
            text="Text 2"
            align="right"
        />
      </Container>
        </Section>
  );
}

export default Wheels;
