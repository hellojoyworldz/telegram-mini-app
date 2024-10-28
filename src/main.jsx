import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { initMiniApp } from "@telegram-apps/sdk";
import App from "./App.jsx";
import "./index.css";

// Telegram SDK 초기화
const initializeTelegramSDK = async () => {
  try {
    const [miniApp] = initMiniApp();
    await miniApp.ready();
    console.log("Telegram environment initialized");
  } catch (error) {
    console.error("Telegram initialization failed:", error);
  }
};

// 앱 실행
initializeTelegramSDK();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
