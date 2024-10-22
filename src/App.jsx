import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [webApp, setWebApp] = useState(null);
  //const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    //setShowSplash(false);
    // 페이지를 새로고침하여 /main으로 이동
    window.location.href = "https://telegram-miniapp-alpha.vercel.app/main";
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
    <Routes>
      <Route
        path="/"
        element={<SplashScreen onComplete={handleSplashComplete} />}
      />
      <Route path="/main" element={<MainScreen webApp={webApp} />} />
    </Routes>
  );
};

export default App;
