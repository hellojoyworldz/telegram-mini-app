import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
//import MainScreen from "./components/MainScreen";

const MainScreen = lazy(() => import("./components/MainScreen"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram?.WebApp) {
      WebApp.ready();
      WebApp.expand();
    }

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
      </Routes>
    </Suspense>
  );
};

export default App;
