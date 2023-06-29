import React from 'react';
import { Box, Typography } from '@mui/material';

const TextBox = ({ title, text, color, padding }) => {

    const boxStyles = {
        padding: padding,
        color: color,
        textAlign: 'left',
    };

    return (
        <Box style={boxStyles}>
            <Typography variant="h6" component="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="text"  component={"body2"}  >
                {text}
            </Typography>
        </Box>
    );
};

export default TextBox;
