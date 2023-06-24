import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ImageTextComponent = ({ image, text, title, align, maxWidth }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        height: '100%',
    };

    const imageStyles = {
        width: '100%',
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
            <Box style={imageWrapperStyles}>
                <img src={image} alt="Bild" style={imageStyles} />
            </Box>
            <Box style={textWrapperStyles}>
                {title && (
                    <Typography variant="h4" component="h2" align="center">
                        {title}
                    </Typography>
                )}
                <Typography variant="body1" component="p" align="center">
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImageTextComponent;
