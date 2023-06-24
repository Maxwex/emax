import logo from './logo.svg';
import './App.css';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import { Header, Main, Details, Range, Wheels, Force, Footer } from './components';
import Navbar from "./components/Navbar";
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";
function App() {
  return (
      <>
          <ThemeProvider theme={theme}   >
        <Navbar />
          <Header />
          <Main />
          <Details />
          <Range />
          <Wheels />
          <Force />
          <Footer />

        </ThemeProvider>
      </>
  );
}

export default App;
