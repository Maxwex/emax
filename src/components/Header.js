import React from 'react';
import {Typography, Button, Container, Box, Stack, Grid, useTheme, useMediaQuery} from '@mui/material';
import backgroundImage from "../assets/lkwMain2.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import  {motion} from "framer-motion";
import { spacing } from '@mui/system';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const headerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };


  const boxItems = [
    { title: 'Reichweite', value: '300 km' },
    { title: 'Leistung', value: '500 PS' },
    { title: 'Geswindigkeit', value: '100 km/h' },
    { title: '0-80 km/h', value: '5 s' },
  ];

  return (

        <Container maxWidth="vw" style={headerStyles}>
          <Typography variant="h2" component="h1" style={{ fontWeight: 'bold', marginTop: '100px' }}>
            eMax
          </Typography>
            <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', marginTop: '20px' }}>
                Der erste elektrische LKW
            </Typography>
          <Stack display="flex"  sx={{
            height: 1,
            width: 1,
            m : 0,
            pt  : 6,

          }}
            flexDirection="column" justifyContent="flex-end" alignItems="center" textAlign="center">


          {/* Großer Abstand */}

          <Box display="flex" justifyContent="space-evenly" mb={3} width={'100%'} maxWidth={800}>
            {boxItems.map((item, index) => (
                ( !isMobile || index < 3 )&& (
                    <motion.div
                key={index}
                whileInView={{ y: [ 50, 0], opacity: [ 0, 1] }}
                transition={{ duration: 0.8, delay: 0.2*index }}>
                <Box key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', padding: '10px',
                width: isMobile ? '30%':140}}>
                  <Typography variant="h5" component="h5">
                    {item.value}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.title}
                  </Typography>
                </Box>
                </motion.div>
                )
            ))}

          </Box>
          <Grid container gap={"2rem"} justifyContent="center" mb={2} >

          <PrimaryButton
          >
              Jetzt vorbestellen
            </PrimaryButton>

          <SecondaryButton >
            Probefahrt vereinbaren
          </SecondaryButton>
          </Grid>
        </Stack>
        </Container>
  );
};

export default Header;
