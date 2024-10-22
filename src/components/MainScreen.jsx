import { useEffect, useState } from "react";
import { Camera, User, Settings } from "lucide-react";

const MainScreen = () => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setWebApp(tg);
      tg.ready();
      tg.expand();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">마이 앱</h1>
          <User className="w-6 h-6" />
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4">
        {/* 카드 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">환영합니다!</h2>
          <p className="text-gray-600">
            {webApp?.initDataUnsafe?.user?.username
              ? `안녕하세요, ${webApp.initDataUnsafe.user.username}님!`
              : "텔레그램 미니앱에 오신 것을 환영합니다."}
          </p>
        </div>

        {/* 메뉴 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "프로필", icon: <User className="w-6 h-6" /> },
            { title: "설정", icon: <Settings className="w-6 h-6" /> },
            { title: "사진", icon: <Camera className="w-6 h-6" /> },
          ].map((item, index) => (
            <button
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2"
              onClick={() =>
                webApp?.showAlert(`${item.title} 메뉴를 선택하셨습니다.`)
              }>
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
