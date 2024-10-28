import { Camera } from "lucide-react";

const SplashScreen = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-blue-500">
        <div className="text-center">
          <div className="animate-bounce mb-4">
            <Camera size={48} className="text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold">Telegram Mini App2</h1>
          <div className="mt-4">
            <div className="w-16 h-1 bg-white mx-auto animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
