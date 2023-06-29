import React from 'react';
import Section from "./Section";
import {Container} from "@mui/material";
import ImageTextComponent from "./ImageTextComponent";

import image1 from "../assets/frontPanel.png";
import image2 from "../assets/mittor2.png";
import image3 from "../assets/sidePanel.png";

function Details() {
  return (
      <Section backgroundColor={"black"}>
        <Container sx={{

          padding: '0',
          margin: '5rem',
        }} >

          <ImageTextComponent
              maxWidth="400"
              title={"Innovatives Design"}
              image={image1}
              text="Das futuristische Design verkörpert Innovation und Fortschritt und schafft ein unverwechselbares Markenzeichen "
              align="left"
              color={"white"}
          />

            <ImageTextComponent
                maxWidth="400"
                image={image3}
                title={"Elegante Linien"}
                text="Die aerodynamischen Linien und ein modernes Erscheinungsbild vereinen Eleganz und Funktionalität."

                align="right"
                color={"white"}
            />
            <ImageTextComponent
                maxWidth="400"
                title={"Verbesserte Sicht"}
                image={image2}
                text="Die neuartige Kameratechnologie revolutioniert die Sichtverhältnisse im Fahrzeug und ist die Alternative zum herkömmlichen Rückspiegel."
                align="left"
                color={"white"}
            />
        </Container>
      </Section>
  );
}

export default Details;
