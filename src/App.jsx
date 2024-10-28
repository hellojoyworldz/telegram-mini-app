import { useLayoutEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      WebApp.expand();
    }

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
    </Routes>
  );
};

export default App;
