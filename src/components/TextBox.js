import React from 'react';
import { Box, Typography } from '@mui/material';

const TextBox = ({ title, text, color }) => {

    const boxStyles = {
        padding: '20px',
        color: color,
        textAlign: 'left',
    };

    return (
        <Box style={boxStyles}>
            <Typography variant="h4" component="h4" gutterBottom>
                {title}
            </Typography>
            <Typography variant="text"    >
                {text}
            </Typography>
        </Box>
    );
};

export default TextBox;
