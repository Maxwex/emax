import React from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Section = ({ backgroundColor, children }) => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    const sectionStyles = {
        background: backgroundColor,

        padding: isMobile ? '0' : '2rem',
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    return <Box style={sectionStyles}>{children}</Box>;
};

export default Section;
