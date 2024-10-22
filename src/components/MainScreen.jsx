import { useEffect, useState } from "react";
import { User } from "lucide-react";

const MainScreen = (webApp) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">마이 앱</h1>
          <User className="w-6 h-6" />
        </div>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">어서오세요!</h2>
          <p className="text-gray-600">
            {webApp?.initDataUnsafe?.user?.username
              ? `안녕하세요, ${webApp.initDataUnsafe.user.username}님!`
              : "텔레그램 미니앱에 오신 것을 환영합니다."}
          </p>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
