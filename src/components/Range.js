import React from 'react';
import Section from "./Section";
import image from "../assets/side4k.png";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import TextBox from "./TextBox";
function Range() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Section backgroundColor={"white"}>

      <Box sx={
          {
                mb: isMobile ? '0' : '4rem',
              display: 'flex',
              position: 'relative',
                flexDirection: 'column',
          }
      }>
          <img src={image} alt="range" style={{width: "100%",
           maxWidth: '1400px',
          }}/>
          <Box sx={
              {
                  position: isMobile? 'relative':'absolute',
                  left : isMobile ? '0' :'50%',
                    top :  isMobile ? '0' : isTablet ? '10%':'20%',
                  width :  isMobile ? '100%' : isTablet ? '250px':'500px ',


              }
          }><TextBox title={"Transportfähigkeit"}
                     padding={isMobile ? ' 2rem 2rem 3rem': '0 '}
                        text={"Transportieren Sie mühelos schwere Fracht über lange Strecken. Unsere leistungsstarke Lösung bewältigt Lasten von bis zu 40 Tonnen zuverlässig und effizient. Verlassen Sie sich auf uns, um Ihre Fracht sicher ans Ziel zu bringen."}
                    color={"black"}
            />

          </Box>
      </Box>
    </Section>
  );
}

export default Range;
