import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    /* primary: {
      main: "#8ba85f",
    }, */
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#8ba85f",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#6a2013",
          hover: {
            backgroundColor: "#62f423",
          },
        },
      },
    },
  },
});

export default darkTheme;
