import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [frameGeometry, setFrameGeometry] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      WebApp.ready();

      const frame = window.Telegram.WebApp.getFrameGeometry();
      setFrameGeometry(frame); // 상태에 프레임 정보를 저장

      // UI를 프레임에 맞게 조정
      console.log("Frame Geometry:", frame);

      WebApp.expand();
    }

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        width: `${frameGeometry.width}px`,
        height: `${frameGeometry.height}px`,
        overflow: "hidden", // 스크롤 방지
      }}
    >
      <Routes>
        <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
      </Routes>
    </div>
  );
};

export default App;
