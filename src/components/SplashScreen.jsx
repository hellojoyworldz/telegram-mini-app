import { Camera } from "lucide-react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-500">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Camera size={48} className="text-white" />
        </div>
        <h1 className="text-white text-2xl font-bold">Telegram Mini App</h1>
        <div className="mt-4">
          <div className="w-16 h-1 bg-white mx-auto animate-pulse rounded-full"></div>
        </div>
        <img
          src="https://static.news.zumst.com/images/127/2024/04/23/dcc926cc063f4a058dcbd2595c18f81c.jpg"
          alt="Telegram"
          className="w-32 h-32 mx-auto mt-4 rounded-full"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
