import React from 'react';
import {Button, useTheme} from '@mui/material';



const SecondaryButton = ({ children }) => {
    const theme = useTheme();


    return (
        <Button

            sx={{
                textTransform: 'none',
                m: '10px',
                height     : '50px',
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',                   backgroundColor: 'transparent',
                   color: '#fff',
                   border: '2px solid #fff',
                   width: '250px',
                   transition: 'background-color 0.3s ease, color 0.s ease',

                   '&:hover': {
                       backgroundColor: '#fff',
                       color: theme.palette.primary.main,
                   },
               }
                   }
        >
            {children}
        </Button>
    );
};



export default SecondaryButton;
