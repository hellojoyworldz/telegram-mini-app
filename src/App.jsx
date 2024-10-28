import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram?.WebApp) {
      WebApp.setViewportHeight(100); // 초기값 설정
      WebApp.onEvent("viewportChanged", () => {
        WebApp.expand(); // viewport가 변경될 때마다 expand 호출
      });

      WebApp.ready();
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
