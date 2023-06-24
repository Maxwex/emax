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
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };



        return (
            <AppBar position="fixed" style={{ backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: '2px',
                    backdropFilter: 'blur(10px)', webKitBackdropFilter: 'blur(10px)',

            }}>
                <Toolbar >
                    {!isMobile && (<Toolbar sx={{ flexGrow: 1,
                    padding: 0,
                    height:'40px'}}>
                    <img src={Logo} alt="Logo" style={{ marginRight: '10px', height: '46px' }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Maxwex
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Über uns</Button>
                    <Button color="inherit">Leistungen</Button>
                    <Button color="inherit">Kontakt</Button>
                    </Toolbar>)}
                    <IconButton color="inherit" edge="end" onClick={toggleSidebar} sx={{ display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
                    <List sx={{ width: 250 }} onClick={toggleSidebar}>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Über uns" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Leistungen" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Kontakt" />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        );
    };
export default Navbar;