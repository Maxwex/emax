import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children, color, bg,hc, bc,mt, ...rest }) => {

    return (
        <Button {...rest}
                sx={{
                    marginTop: mt? mt : '0',
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
                            backgroundColor:   hc? hc : '#dddddd',
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
