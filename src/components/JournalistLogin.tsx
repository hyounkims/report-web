import { Video } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function JournalistLogin() {
  const { loginWithGoogle, loginWithKakao, loginWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Using Google Login failed:", error);
      alert("Google 로그인에 실패했습니다.");
    }
  };

  const handleKakaoLogin = async () => {
    try {
      await loginWithKakao();
    } catch (error) {
      console.error("Using Kakao Login failed:", error);
      alert("Kakao 로그인에 실패했습니다.");
    }
  };

  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate("/video-list");
    } catch (error) {
      console.error("Email login failed:", error);
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-900">VID REPORT for Press</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-8">
              <h1 className="text-gray-900 mb-2">기자용 계정 로그인</h1>
              <p className="text-gray-600">
                제보된 사건·사고 영상을 확인하고 구매하세요.
              </p>
            </div>

            <div className="space-y-4">
              {/* Login Form */}
              <form className="space-y-4" onSubmit={handleEmailLogin}>
                <div>
                  <label className="block text-gray-700 mb-2">이메일</label>
                  <input
                    type="email"
                    placeholder="example@newscompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">비밀번호</label>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3.5 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  로그인
                </button>
              </form>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    또는
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium py-3.5 px-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google로 계속하기
              </button>

              <button
                onClick={handleKakaoLogin}
                className="w-full flex items-center justify-center gap-3 bg-[#FEE500] text-[#000000] font-medium py-3.5 px-4 rounded-xl hover:bg-[#FDD835] transition-colors"
              >
                <img
                  src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
                  alt="Kakao"
                  className="w-5 h-5"
                />
                카카오로 계속하기
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  비밀번호를 잊으셨나요?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6">
        <p className="text-center text-gray-500">
          계정이 필요하시면 관리자에게 문의하세요.
        </p>
      </footer>
    </div>
  );
}
