import { useState, useEffect } from "react";
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
    const initTelegramWebApp = () => {
      if (window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        setWebApp(tg);
        tg.ready();
        tg.expand();
      } else {
        console.log("Telegram WebApp not found");
        alert("Telegram WebApp not found");
      }
    };

    // 웹앱이 로드되는 데 시간이 걸릴 수 있으므로 약간의 지연을 추가합니다.
    setTimeout(initTelegramWebApp, 1000);

    // 디버깅을 위한 이벤트 리스너 추가
    window.addEventListener("error", (e) =>
      console.error("Telegram WebApp error:", e)
    );
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <MainScreen webApp={webApp} />
      )}
    </>
  );
};

export default App;
