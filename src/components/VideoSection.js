import React from 'react';
import YouTube from 'react-youtube';
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";

const VideoSection = ({ id }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const opts = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        playerVars: {
            enablejsapi: 1, // Aktiviert die JavaScript-API
            controls: 1, // Entfernt die Bedienelemente
            "modestbranding": 1, // Zeigt nur das YouTube-Logo an
            showinfo: 0, // Entfernt den Titel und den Teilen-Button
            rel: 0, // Entfernt die Vorschläge am Ende des Videos
        }
    };

    return (
        <Box container
             width={isMobile ? '100%' : '66.67%'}
               minWidth={isMobile ? '100%' : '600px'}
        >
            <Box position="relative"
                 paddingBottom={'56.25%'} // 16:9 aspect ratio for mobile view
                 width="100%">
            <YouTube style={{position: 'absolute', top: 0, left: 0, width: '100%',
                height :"100%"}} videoId={id} opts={opts}
            />
        </Box>
            </Box>

    );
};

export default VideoSection;
