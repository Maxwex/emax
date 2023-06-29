import React from 'react';
import Section from "./Section";
import ImageTextComponent from "./ImageTextComponent";
import image from "../assets/steps.png";
import image2 from "../assets/steps2.png";
import {Box, Container, useMediaQuery} from "@mui/material";
import ImageSwitcher from "./ImageSwitcher";
import TextBox from "./TextBox";
import {theme} from "../theme";
function Force() {

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section backgroundColor={"white"}>
        <Container >
        <Box   sx={{
            width:' 100%',
            my: '4rem',
            height: '99%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }}>

       <ImageSwitcher image1={image} image2={image2} interval={3000}/>

            <Box sx={{
            width: '100%',
                maxWidth:'1000px'
        }}>
            <TextBox
                       title={"Leichter Einstieg"}
                          padding={isMobile? '2rem':    '2rem 4rem  '}
                        text={"Während der Fahrt werden die Einstiegstritte automatisch geschlossen, um den Luftwiderstand zu minimieren. Beim Anhalten werden die Einstiegstritte automatisch ausgefahren, um einen sicheren Ein- und Ausstieg zu gewährleisten.   "}


            />
        </Box>
        </Box>
        </Container>
    </Section>
  );
}

export default Force;
