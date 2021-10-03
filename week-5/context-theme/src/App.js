import React from "react";
import "./styles.css";

import AppContainer from "./components/AppContainer";

// TODO: attention!:
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer/>
    </ThemeProvider>
  );
}
