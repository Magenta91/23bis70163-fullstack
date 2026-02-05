import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LandingPage />
      <Dashboard />
      <AdminPanel />
    </ThemeProvider>
  );
}

export default App;
