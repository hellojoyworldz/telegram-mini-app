import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  useHapticFeedback,
  useShowPopup,
} from "@vkruglikov/react-telegram-web-app";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const showPopup = useShowPopup();
  const [, notificationOccurred] = useHapticFeedback();
  const [isInvalidVersion, setIsInvalidVersion] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      if (!window.Telegram.WebApp.isVersionAtLeast("6.9")) {
        notificationOccurred("error");
        if (window.Telegram.WebApp.isVersionAtLeast("6.2")) {
          showPopup({
            message:
              "Please update your Telegram app to the latest version to use this app.",
          });
        } else {
          console.log("the version is not supported");
          setIsInvalidVersion(true);
        }
      }
      // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
      try {
        window.Telegram.WebApp.requestWriteAccess();
      } catch (e) {
        console.log(e);
      }
      window.Telegram.WebApp.expand();
    }

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Routes>
      {isInvalidVersion && (
        <div className="invalid-version">
          <div className="invalid-version__content">
            <h1>Sorry but this version is outdated!</h1>
            <h1>
              Please update your Telegram app to the latest version to use this
              app.
            </h1>
          </div>
        </div>
      )}
      {!isInvalidVersion && (
        <Route path="/" element={loading ? <SplashScreen /> : <MainScreen />} />
      )}
    </Routes>
  );
};

export default App;
