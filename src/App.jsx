import {  useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp {
      WebApp.expand();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/main" element={<MainScreen />} />
    </Routes>
  );
};

export default App;
