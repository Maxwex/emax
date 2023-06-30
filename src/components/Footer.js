import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from "./Section";

const Footer = () => {
    return (
        <Section backgroundColor={"#333"}>
        <Box
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">© 2023 Maxwex. All rights reserved.</Typography>
        </Box>
            <Typography  fontSize=".3rem" color={'white'}
                        style={{maxWidth: '800px', margin: 'auto', textAlign: 'center'}}
            >
               Die auf dieser Website präsentierten Inhalte sind rein fiktiv und ausschließlich zu Demonstrationszwecken dienen. Wir möchten jedoch betonen, dass wir bei ernsthaftem Interesse und potenziellen Kooperationsmöglichkeiten bereit sind, konkrete Schritte zur Umsetzung eines Prototyps zu unternehmen.
            </Typography>
        </Section>
    );
};

export default Footer;
