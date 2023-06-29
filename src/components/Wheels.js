import React from 'react';
import {Container} from "@mui/material";
import ImageTextComponent from "./ImageTextComponent";
import image2 from "../assets/reifen.png";
import image3 from "../assets/backlight2.png";
import Section from "./Section";
import image1 from "../assets/sattel.png";
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
      <Section backgroundColor={"black"}>
          <Container sx={{

              padding: '0',
              margin: '5rem',
          }} >


          <ImageTextComponent
              maxWidth="400"
              image={image2}
              title={"Fest im Griff"}
              text="Standardmäßig ausgestattet mit den Refen von Maxwheels, ist jedes Straßenverhältnis meisterbar."
              align="left"
              color={"white"}
          />
        <ImageTextComponent
            maxWidth="400"
            image={image1}
            title={"Aufgesattelt"}
            text="Gefertigt aus hochwertigen Materialien, bietet der Sattel eine  beeindruckende Belastbarkeit von bis zu 40 Tonnen."
            align="right"
            color={"white"}
        />
          <ImageTextComponent
          maxWidth="400"
          image={image3}
          title={"Moderne Lichttechnik"}
          text="Die markanten OLED-Rückleuchten verleihen eine perfekte Sichtbarkeit und einen Wiedererkennungswert bei Nacht."
          align="left"
          color={"white"}
      />
      </Container>
        </Section>
  );
}

export default Wheels;
