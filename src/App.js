import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import JobsPage from "./pages/JobsPage";
import JobDetail from "./pages/JobDetail";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:page" element={<JobsPage />} />
        <Route path="/jobs/jobDetail/:id" element={<JobDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
