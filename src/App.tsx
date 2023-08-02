import Header from "./layouts/Header";
import AdressPage from "./pages/AddressPage";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AdressPage />
    </ThemeProvider>
  );
}

export default App;
