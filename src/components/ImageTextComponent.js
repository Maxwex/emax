import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import TextBox from "./TextBox";
import { motion } from 'framer-motion';
import AnimateBox from "./AnimateBox";


const ImageTextComponent = ({ image, text, title, align, maxWidth, color }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const imageWrapperStyles = {
        width: isMobile ? '100%' : '50%',
    };

    const textWrapperStyles = {
        width: isMobile ? '100%' : '50%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        aspectRatio:  '16 / 9',
        height: '%',
        color: color,

    };

    const imageStyles = {
        width: isMobile ? '100%' : '50%',

        height: '100%',
        objectFit: 'cover',
    };

    return (
        <Box
            display="flex"
            m={0}
            p={0}
            flexDirection={isMobile ? 'column' : align === 'left' ? 'row' : 'row-reverse'}
            alignItems={isMobile ? 'center' : 'flex-start'}
        >
                <motion.img src={image} alt="Bild" style={imageStyles} whileInView={{ y: [ 50, 0], opacity: [ 0, 1] }}
                            transition={{ duration: 0.8, delay: 0.1 }} />

            <Box style={textWrapperStyles}>
                <AnimateBox>
                <TextBox text={text}
                         padding={ isMobile?  '0 3rem' : isTablet? '1rem ': align === 'left' ? '0 0 0 7rem' : '0 7rem 0 0'}
                title={title}
                color={color}
                /></AnimateBox>
            </Box>
        </Box>
    );
};

export default ImageTextComponent;
