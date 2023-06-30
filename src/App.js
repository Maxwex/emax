import logo from './logo.svg';
import './App.css';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import {Header, Main, Details, Range, Wheels, Force, Technical, Preorder} from './components';
import Navbar from "./components/Navbar";
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import Battery from "./components/Battery";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Header/>
                <Main/>
                <Details/>

                <Battery/>
                <Range/>
                <Wheels/>
                <Force/>
                <Technical/>
                <Preorder/>

            </ThemeProvider>
        </>
    );
}

export default App;
