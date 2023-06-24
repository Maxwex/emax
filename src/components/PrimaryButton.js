import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children }) => {

    return (
        <Button
                sx={{
                    textTransform: 'none',
                    m: '10px',
                    height     : '50px',

                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',

                    backgroundColor: 'white',
                        color: '#000',

                    border: '2px solid #fff',
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
