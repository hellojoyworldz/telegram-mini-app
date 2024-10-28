import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

// 1. 즉시 UI 확장
if (window.Telegram && window.Telegram?.WebApp) {
  WebApp.expand();
}
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. 페이지 로드 완료시
    window.onload = () => {
      // 3. WebApp ready 알림
      if (window.Telegram && window.Telegram?.WebApp) {
        WebApp.ready();
      }
      // 4. 3초 후 스플래시 스크린 제거
      setTimeout(() => setLoading(false), 3000);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
    </Routes>
  );
};

export default App;
