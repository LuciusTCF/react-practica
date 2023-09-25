import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarApp from "./components/NavBarApp.jsx";
import HomeScreen from "./views/HomeScreen.jsx";
import ContactScreen from "./views/ContactScreen.jsx";
import ErrorScreen from "./views/ErrorScreen.jsx";
import FooterApp from "./components/FooterApp";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-black" : ""}>
      <BrowserRouter>
        <NavBarApp darkMode={darkMode} changeMode={changeMode} />
        <Routes>
          <Route path="/" element={<HomeScreen darkMode={darkMode} />} />
          <Route
            path="/contact"
            element={<ContactScreen darkMode={darkMode} />}
          />
          <Route path="*" element={<ErrorScreen darkMode={darkMode} />} />
        </Routes>
        <FooterApp darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
