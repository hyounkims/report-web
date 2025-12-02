import { Bell } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FileVideo } from "lucide-react";
import { Home, Video, FileText } from "lucide-react";

type ReportStatus = "검수중" | "판매중" | "판매됨";

interface Report {
  id: string;
  title: string;
  status: ReportStatus;
  timestamp: string;
  estimatedPrice: number;
  totalSales?: number;
  thumbnail: string;
}

export default function MyReportsScreen() {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const filters = ["전체", "검수중", "판매중", "판매됨"];

  // Mock data - replace with real data
  const reports: Report[] = [
    {
      id: "1",
      title: "강남역 다중 추돌 사고 현장 영상",
      status: "판매됨",
      timestamp: "2025-11-28 14:32",
      estimatedPrice: 30000,
      totalSales: 60000,
      thumbnail: "https://images.unsplash.com/photo-1720247548952-41ad3005151d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwYWNjaWRlbnQlMjBzY2VuZXxlbnwxfHx8fDE3NjQ1MTA0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "2",
      title: "아파트 화재 발생 초기 영상",
      status: "판매중",
      timestamp: "2025-11-27 09:15",
      estimatedPrice: 45000,
      thumbnail: "https://images.unsplash.com/photo-1761168942327-ed740f993f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZW1lcmdlbmN5JTIwc2NlbmV8ZW58MXx8fHwxNzY0NTEwNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "3",
      title: "폭우로 인한 도로 침수 상황",
      status: "검수중",
      timestamp: "2025-11-26 16:45",
      estimatedPrice: 25000,
      thumbnail: "https://images.unsplash.com/flagged/photo-1557952853-89d464e66feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9ybSUyMHdlYXRoZXJ8ZW58MXx8fHwxNzY0NTEwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Toggle to show empty state - set to [] to test empty state
  const showEmptyState = reports.length === 0;

  const getStatusBadgeClass = (status: ReportStatus) => {
    switch (status) {
      case "검수중":
        return "bg-gray-100 text-gray-700";
      case "판매중":
        return "bg-blue-100 text-blue-700";
      case "판매됨":
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] bg-white flex flex-col relative">
        {/* Top App Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h1 className="text-gray-900">내 제보</h1>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 px-6 py-4 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reports List or Empty State */}
        <div className="flex-1 overflow-y-auto px-6 pb-20">
          {showEmptyState ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center px-8">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FileVideo className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2 text-center">
                아직 제보한 영상이 없습니다.
              </h3>
              <p className="text-gray-500 text-center mb-8">
                사건·사고 영상을 제보하고 수익을 얻으세요.
              </p>
              <button className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                지금 제보하러 가기
              </button>
            </div>
          ) : (
            /* Reports List */
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex gap-3">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <ImageWithFallback
                        src={report.thumbnail}
                        alt={report.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-gray-900 mb-2 line-clamp-2">
                        {report.title}
                      </h3>

                      {/* Status and Time */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-sm ${getStatusBadgeClass(report.status)}`}>
                          {report.status}
                        </span>
                        <span className="text-gray-500 text-sm">
                          촬영 시간: {report.timestamp}
                        </span>
                      </div>

                      {/* Price */}
                      <p className="text-gray-600 text-sm">
                        예상 가격: ₩{report.estimatedPrice.toLocaleString()}
                      </p>

                      {/* Total Sales if sold */}
                      {report.totalSales && (
                        <p className="text-green-600 mt-1">
                          누적 판매 금액: ₩{report.totalSales.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content will be replaced with bottom nav */}
        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-500 hover:text-gray-900 transition-colors">
            <Home className="w-6 h-6" />
            <span className="text-xs">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-500 hover:text-gray-900 transition-colors">
            <Video className="w-6 h-6" />
            <span className="text-xs">제보하기</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-black">
            <FileText className="w-6 h-6" />
            <span className="text-xs">내 제보</span>
          </button>
        </div>
      </div>
    </div>
  );
}