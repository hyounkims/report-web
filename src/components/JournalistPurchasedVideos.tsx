import { Video, User, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function JournalistPurchasedVideos() {
  const [activeTab, setActiveTab] = useState("구매한 영상");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Mock data for purchased videos - set to empty array to test empty state
  const purchasedVideos = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1673187139612-6bf684a74815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudCUyMHRyYWZmaWN8ZW58MXx8fHwxNzY0NTU2MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "강남역 앞 교통사고 현장",
      incidentType: "교통사고",
      purchaseDate: "2025-11-28 15:20",
      price: 30000,
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1712640379137-6d2532f887a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZW1lcmdlbmN5fGVufDF8fHx8MTc2NDU1NjI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "아파트 화재 발생 초기 영상",
      incidentType: "화재",
      purchaseDate: "2025-11-27 10:15",
      price: 45000,
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1657069342866-2d11c2509b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZGVkJTIwc3RyZWV0fGVufDF8fHx8MTc2NDQ0MDA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "폭우로 인한 도로 침수 상황",
      incidentType: "자연재해",
      purchaseDate: "2025-11-26 14:30",
      price: 25000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">구매한 영상</h1>
          <p className="text-gray-600">
            이미 구매한 제보 영상을 다시 확인하고 다운로드할 수 있습니다.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="제목 또는 제보 ID 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Date Range Picker */}
          <Input
            type="date"
            placeholder="구매 일자"
            className="w-48"
          />

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">최근 구매순</SelectItem>
              <SelectItem value="oldest">오래된 순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {purchasedVideos.length > 0 ? (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">썸네일</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">제목</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">사건 유형</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">구매 일시</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">가격</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">다운로드</th>
                  <th className="text-left px-6 py-4 text-gray-900 text-sm">라이선스</th>
                </tr>
              </thead>
              <tbody>
                {purchasedVideos.map((video) => (
                  <tr key={video.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-24 aspect-video bg-gray-100 rounded overflow-hidden">
                        <ImageWithFallback
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{video.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {video.incidentType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600">{video.purchaseDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">₩{video.price.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                        다운로드
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline">
                        라이선스 보기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* Empty State */
            <div className="py-16 px-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-900 mb-2">아직 구매한 영상이 없습니다.</p>
              <p className="text-gray-600 text-sm">
                제보 영상 목록에서 필요한 영상을 찾아보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}