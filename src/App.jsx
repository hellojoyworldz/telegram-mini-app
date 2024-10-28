import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

// 즉시 UI 확장
if (window.Telegram && window.Telegram?.WebApp) {
  WebApp.expand();
}
const App = () => {
  const [loading, setLoading] = useState(true);

  if (window.Telegram && window.Telegram?.WebApp) {
    WebApp.expand();
  }

  useEffect(() => {
    setTimeout(() => {
      WebApp.expand();
      WebApp.ready();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
    </Routes>
  );
};

export default App;
