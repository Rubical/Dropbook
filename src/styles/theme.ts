import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(75,75,75)",
      contrastText: "white",
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
});
