import React from "react";
import "tailwindcss/tailwind.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/components/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden ">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
