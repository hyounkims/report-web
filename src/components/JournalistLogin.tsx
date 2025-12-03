import { Video } from "lucide-react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function JournalistLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate("/video-list");
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

            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
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

              <div className="text-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  비밀번호를 잊으셨나요?
                </button>
              </div>
            </form>
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
