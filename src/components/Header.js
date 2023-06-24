import React from 'react';
import {Typography, Button, Container, Box, Stack, Grid} from '@mui/material';
import backgroundImage from "../assets/lkwMain2.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { spacing } from '@mui/system';

const Header = () => {
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

  const buttonStyles = {
    marginTop: '20px',
  };

  const boxItems = [
    { title: 'Reichweite', value: '300 km' },
    { title: 'Leistung', value: '500 PS' },
    { title: 'Gewicht', value: '2,5 t' },
    { title: 'Preis', value: '$50,000' },
  ];

  return (

        <Container maxWidth="vw" style={headerStyles}>
          <Typography variant="h2" component="h1" style={{ fontWeight: 'bold', marginTop: '100px' }}>
            eMax
          </Typography>
          <Stack display="flex"  sx={{
            height: 1,
            width: 1,
            m : 0,
            pt  : 6,

          }}
            flexDirection="column" justifyContent="flex-end" alignItems="center" textAlign="center">


          {/* Großer Abstand */}

          <Box display="flex" justifyContent="center" mb={0}>
            {boxItems.map((item, index) => (
                <Box key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', padding: '10px', margin: '10px' }}>
                  <Typography variant="h6" component="p">
                    {item.value}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.title}
                  </Typography>
                </Box>
            ))}

          </Box>
          <Grid container spacing={2} justifyContent="center"  >

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
