import { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [webApp, setWebApp] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

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

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return null; // 또는 로딩 인디케이터를 표시할 수 있습니다.
  }
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
