import { Video, User, LogOut, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 로그인 페이지에서는 헤더를 표시하지 않음
  if (location.pathname === "/") {
    return null;
  }

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-900">VID REPORT for Press</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/video-list"
            className={`pb-1 transition-colors ${
              isActive("/video-list")
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            제보 영상
          </Link>
          <Link
            to="/purchased"
            className={`pb-1 transition-colors ${
              isActive("/purchased")
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            구매한 영상
          </Link>
          <Link
            to="/video-detail"
            className={`pb-1 transition-colors ${
              isActive("/video-detail")
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            영상 상세
          </Link>
        </div>

        {/* User Profile */}
        <div className="relative" ref={dropdownRef}>
          {isAuthenticated ? (
            <>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-900">{user?.name} 기자</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-900 font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    로그아웃
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-gray-600">로그인</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
