import React from 'react';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@mui/material';

const ImageTableComponent = ({ image, data }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width: 700px)');
    return (
        <Box display="flex" flexDirection={isMobile? 'column' : 'row' } alignItems="center" justifyContent="center"
        >
           <Box width={'100%'} my={2}>
                <img src={image} alt="Bild" style={{ width: '100%', height: 'auto' }} />
            </Box>
                <Box width={'100%'} my={8} >
                <Grid container pl={'5%'} maxWidth={'500px'} >
                    {data.map((item, index) => (
                        <Grid item xs={6}  key={index}>
                                    <Box
                                         display="flex"
                                         alignItems="flex-start"
                                         flexDirection={'column'}
                                         alignContent={'flex-start'}
                                        justifyContent={'flex-start'}
                                        padding={2}
                                    >
                                        <div style={{width: '20%', borderBottom: '1px solid white', marginRight: '10px', marginBottom: '.5rem'}}></div>
                                        <Box style={{color:'#ddd', textAlign:'left' , fontWeight: 700 , margin: '.1rem 0'}}>{item.key}</Box>

                                        <Box style={{color:'white', textAlign:'left'  }}>{item.value}</Box>
                                    </Box>

                        </Grid>
                    ))}
                </Grid>
</Box>
        </Box>
    );
};

export default ImageTableComponent;