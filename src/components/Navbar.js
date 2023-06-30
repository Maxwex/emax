import React, {useEffect} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    ListItemText,
    ListItem,
    IconButton,
    Drawer,
    List,
    Box, useTheme, useMediaQuery
} from '@mui/material';
import Logo from '../assets/MW.png';
import {useState} from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <AppBar position="fixed" style={{
            backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: '2px',
            backdropFilter: 'blur(10px)', webKitBackdropFilter: 'blur(10px)', display: 'flex',
            height: '50px',
        }}
        >
            <Toolbar style={{
                zIndex: 1000,
                minHeight: '50px',
                margin: ' 0 ',

            }}>
                {!isMobile && (<Toolbar sx={{
                    flexGrow: 1,
                    padding: 0,
                }}
                style={{

                    minHeight: '50px',
                    marginTop: ' 0 ',

                }}>

                    <img src={Logo} alt="Logo" style={{marginRight: '10px', height: '36px'}}/>
                    <Typography
                                 variant="h5" component="div" ml={1} sx={{flexGrow: 1}}>
                        Maxwex
                    </Typography>
                    <Button href='#home' color="inherit">Home</Button>
                    <Button color="inherit" href='#video'>Video</Button>
                    <Button color="inherit" href='#data'>Details</Button>
                    <Button color="inherit" href='#preorder'>Vorbestellen</Button>
                </Toolbar>)}

            </Toolbar><IconButton color="inherit" edge="end" onClick={toggleSidebar} style={{
            position: 'absolute',
            right: isSidebarOpen ? '45px' : '30px',
            top: '10px',
            zIndex: 1100,
            display: isMobile ? 'block' : 'none'
        }}>
            {isSidebarOpen ? <CloseIcon/> : <MenuIcon/>}

        </IconButton>
            <Drawer sx={{
                zIndex: 100

            }} anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
                <List sx={{
                    width: 250,
                    paddingTop: '50px',

                }} onClick={toggleSidebar}>
                    <ListItem button>
                        <ListItemText href='#home' primary="Home"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText href='#video' primary="Video"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Details"
                        href='#data'
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Vorbestellen"
                        href='#preorder'
                        />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>

    );
};
export default Navbar;