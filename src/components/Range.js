import React from 'react';
import Section from "./Section";
import image from "../assets/side4k.png";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import TextBox from "./TextBox";
function Range() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section backgroundColor={"white"}>

      <Box sx={
          {
              my:'5rem',
              display: 'flex',
              position: 'relative',
          }
      }>
          <img src={image} alt="range" style={{width: "100%"}}/>
          <Box sx={
              {
                  position: 'absolute',
                  left : isMobile ? '40%' :'50%',
                    top :  isMobile ? '10%' :'20%',
                  width :  isMobile ? '80%' :'40%',


              }
          }><TextBox title={"Nutzlast"}
                        text={"Die beeindruckende Nutzlastkapazität von rund 10,4 Tonnen macht unseren elektrischen LKW zur idealen Wahl für den Transport schwerer Lasten."}
                    color={"black"}
            />

          </Box>
      </Box>
    </Section>
  );
}

export default Range;
