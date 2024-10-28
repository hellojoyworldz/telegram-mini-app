import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { Camera } from "lucide-react";

const SplashScreen = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram?.WebApp) {
      WebApp.expand();
    }
  }, []);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-blue-500">
        <div className="text-center">
          <div className="animate-bounce mb-4">
            <Camera size={48} className="text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold">Telegram Mini App</h1>
          <div className="mt-4">
            <div className="w-16 h-1 bg-white mx-auto animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "800px" }}></div>
    </>
  );
};

export default SplashScreen;
