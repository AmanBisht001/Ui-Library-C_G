import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ButtonsPage from "./pages/Components/ButtonsPage/ButtonsPage";
import CardsPage from "./pages/Components/CardsPage/CardsPage";
import FormsPage from "./pages/Components/FormsPage/FormsPage";
import GridPage from "./pages/Layout/GridPage";
import SpacingPage from "./pages/Layout/SpacingPage";
import NotFoundPage from "./pages/NotFoundPage";

// Utilities
import TextPage from "./pages/Utilities/TextPage";
import ColorsPage from "./pages/Utilities/ColorsPage";

// ✅ Documentation Page (Correct Path)
// import DocumentationPage from "./pages/Doc/DocumentationPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenSidebar={() => setSidebarOpen(true)} />}
            />
            <Route path="/components/buttons" element={<ButtonsPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/forms" element={<FormsPage />} />
            <Route path="/layout/grid" element={<GridPage />} />
            <Route path="/layout/spacing" element={<SpacingPage />} />

            {/* Utility Routes */}
            <Route path="/utilities/text" element={<TextPage />} />
            <Route path="/utilities/colors" element={<ColorsPage />} />

            {/* ✅ Documentation Route */}
            {/* <Route path="/doc" element={<DocumentationPage />} /> */}

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
