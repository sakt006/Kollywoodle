import "./styles.css";
import MovieGame from "./game";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HowToPlayModal from "./howToPlayModal";
import { Box, CssBaseline } from "@mui/material";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div align="center">
        <CssBaseline />
        <Box sx={{ width: "100%", maxWidth: 500, alignItems: "center" }}>
          <div>
            <h1 align="center">Kollywoodle</h1>
            <div class="top-bar">
              <div>
                <HowToPlayModal />
              </div>
              <div>
                <button class="top-bar-btn"> ACKNOWLEDGMENTS </button>
              </div>
              <div>
                <button class="top-bar-btn"> SETTINGS </button>
              </div>
            </div>
          </div>
          <MovieGame />
        </Box>
      </div>
    </ThemeProvider>
  );
}
