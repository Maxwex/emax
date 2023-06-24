import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

// Definiere die Farbpalette
export const theme = createTheme({
    typography: {
        text: {
            fontSize:' 1.2rem',
            fontWeight: '500',

        },
    },
    palette: {
        primary: {
            main: '#000000', // Schwarz als Hauptfarbe
            dark: '#222222', // Dunkleres Schwarz
            light: '#999999', // Helleres Schwarz
            contrastText: '#FFFFFF', // Weiß als Kontrastfarbe
            veryLight: '#F2F2F2', // Sehr helles Grau
            darkGrey: '#333333', // Dunkelgraues Schwarz
            white: '#FFFFFF', // Weiß
        },
        secondary: {
            main: '#FF0000', // Rot als Akzentfarbe
            dark: '#990000', // Dunkleres Rot
            light: '#FF9999', // Helleres Rot
        },

        background: {
            default: '#FFFFFF', // Weiß als Hintergrundfarbe
        },
    },
});