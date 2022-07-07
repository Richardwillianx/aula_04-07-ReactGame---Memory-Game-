import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./Components/AppBar";
import darkTheme from "./Pages/Themes/darkTheme";
import lightTheme from "./Pages/Themes/lightTheme";
import Router from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Router>
          <CustomAppBar />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
