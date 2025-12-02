import { Video, User } from "lucide-react";
import { useState } from "react";
import { Search, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideoReport {
  id: string;
  title: string;
  category: string;
  status: "판매중" | "검수중" | "판매완료";
  timestamp: string;
  location: string;
  price: number;
  thumbnail: string;
}

export default function JournalistVideoList() {
  const [activeTab, setActiveTab] = useState("제보 영상");
  const [sortBy, setSortBy] = useState("최신순");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Mock data
  const videos: VideoReport[] = [
    {
      id: "1",
      title: "강남역 다중 추돌 사고 현장 영상",
      category: "교통사고",
      status: "판매중",
      timestamp: "2025-11-28 14:32",
      location: "서울시 강남구",
      price: 30000,
      thumbnail: "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudHxlbnwxfHx8fDE3NjQ1MTA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "2",
      title: "아파트 화재 발생 초기 영상",
      category: "화재",
      status: "판매중",
      timestamp: "2025-11-27 09:15",
      location: "서울시 관악구",
      price: 45000,
      thumbnail: "https://images.unsplash.com/photo-1626123404632-a8fbec6d47e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZpcmV8ZW58MXx8fHwxNzY0NTEwODgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "3",
      title: "폭우로 인한 도로 침수 상황",
      category: "자연재해",
      status: "판매중",
      timestamp: "2025-11-26 16:45",
      location: "인천시 남동구",
      price: 25000,
      thumbnail: "https://images.unsplash.com/photo-1760500959977-c3d310ee876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGRpc2FzdGVyfGVufDF8fHx8MTc2NDUxMDg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "4",
      title: "시민 집회 현장 영상",
      category: "집회",
      status: "검수중",
      timestamp: "2025-11-26 11:20",
      location: "서울시 종로구",
      price: 20000,
      thumbnail: "https://images.unsplash.com/photo-1648065459744-06ee25136f87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbnxlbnwxfHx8fDE3NjQ0MDQwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "5",
      title: "폭설로 인한 교통 마비 상황",
      category: "자연재해",
      status: "판매중",
      timestamp: "2025-11-25 07:30",
      location: "경기도 수원시",
      price: 35000,
      thumbnail: "https://images.unsplash.com/photo-1521724718-79597c7fdcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHNub3d8ZW58MXx8fHwxNzY0NTEwODgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "6",
      title: "건물 붕괴 현장 긴급 구조 영상",
      category: "안전사고",
      status: "판매중",
      timestamp: "2025-11-24 18:50",
      location: "경기도 성남시",
      price: 50000,
      thumbnail: "https://images.unsplash.com/photo-1692176961746-e3b5aeb9669a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNjdWV8ZW58MXx8fHwxNzY0NTEwODgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getStatusBadgeClass = (status: VideoReport["status"]) => {
    switch (status) {
      case "검수중":
        return "bg-gray-100 text-gray-700";
      case "판매중":
        return "bg-blue-100 text-blue-700";
      case "판매완료":
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content will be added here */}
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <h1 className="text-gray-900 mb-2">제보 영상</h1>
        <p className="text-gray-600">
          실시간으로 들어온 사건·사고 영상을 확인하세요.
        </p>

        {/* Filter Bar */}
        <div className="mt-6 flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700">정렬</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option>최신순</option>
              <option>가격 낮은순</option>
              <option>가격 높은순</option>
            </select>
          </div>

          {/* Date Range Picker */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700">업로드 일자</label>
            <div className="relative">
              <input
                type="date"
                className="px-4 py-2 pl-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search Box */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="제목 또는 설명으로 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Video Grid */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {video.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusBadgeClass(video.status)}`}>
                    {video.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>

                {/* Info */}
                <div className="space-y-1 mb-4">
                  <p className="text-gray-600 text-sm">
                    촬영 시간: {video.timestamp}
                  </p>
                  <p className="text-gray-600 text-sm">
                    촬영 위치: {video.location}
                  </p>
                  <p className="text-gray-900">
                    가격: ₩{video.price.toLocaleString()}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 mb-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>이전</span>
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>다음</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}