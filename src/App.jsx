import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [webApp, setWebApp] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setWebApp(tg);
      tg.ready();
      tg.expand();
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SplashScreen onComplete={handleSplashComplete} />}
          />
          <Route path="/main" element={<MainScreen webApp={webApp} />} />
        </Routes>
        {showSplash ? <Navigate to="/" /> : <Navigate to="/main" />}
      </Router>
    </>
  );
};

export default App;
