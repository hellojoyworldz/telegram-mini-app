import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      // 배경 색상 설정
      //window.Telegram.WebApp.setBackgroundColor("#000");
      tg.expand();
      tg.ready();
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    window.onload = () => {
      if (window.Telegram && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.expand();
        tg.ready();
      }
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
    </Routes>
  );
};

export default App;
