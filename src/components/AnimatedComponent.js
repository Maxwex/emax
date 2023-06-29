import React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedComponent = ({ content }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const transition = {
        duration: 0.8,
        delay: 0.1,
    };

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                alignContent: 'center',
                width:  '100%',
                maxWidth: '800px',

            }}
        >
            {content.map((item, index) => (
                <motion.div
                    key={index}
                    //apper when in view
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}

                    transition={{ ...transition, delay: transition.delay + index * 0.3}}
                    style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', padding: '10px',
                        width: isMobile ? '30%':140, marginTop: '0px'}}
                >
                    <Box >
                        <Typography mb={1} variant="h5" component="p">
                            {item.text}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {item.title}
                        </Typography>
                    </Box>
                </motion.div>
            ))}
        </Box>
    );
};

export default AnimatedComponent;
