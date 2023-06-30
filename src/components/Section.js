import React from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Section = ({ backgroundColor,idName, children, padding ,...rest}) => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    const sectionStyles = {
        background: backgroundColor,


        paddingTop: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '0' :  padding? padding :'2rem',
    };

    return <Box id={idName}  style={sectionStyles} {...rest} >{children}</Box>;
};

export default Section;
