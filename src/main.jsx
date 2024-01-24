import "./App.css";
import "animate.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, 'Helvetica Neue', Arial",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
