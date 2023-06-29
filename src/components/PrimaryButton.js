import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children, color, bg, bc }) => {

    return (
        <Button
                sx={{
                    textTransform: 'none',

                    height     : '50px',

                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',

                    backgroundColor: bg? bg : 'white',
                        color: color? color : 'black',

                    border: '2px solid ',
                    borderColor:  bc? bc : 'black' ,
                        width: '250px',
                        transition: 'background-color 0.3s ease, color 0.s ease',

                        '&:hover': {
                            backgroundColor: '#dddddd',
                            border: '2px solid #ddd',
                        },
                    }
                }
                    >
            {children}
        </Button>
    );
};

export default PrimaryButton;
