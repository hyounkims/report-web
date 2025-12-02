import { Video, User, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function JournalistVideoDetail() {
  const [activeTab, setActiveTab] = useState("제보 영상");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-gray-900 transition-colors">
            제보 영상
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">강남역 다중 추돌 사고 현장 영상</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-[70%_30%] gap-8">
          {/* Left Column - Video & Info */}
          <div>
            {/* Video Player */}
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673187139612-6bf684a74815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudCUyMHRyYWZmaWN8ZW58MXx8fHwxNzY0NTU2MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-white/60 text-6xl rotate-[-20deg] select-none pointer-events-none">
                  PREVIEW
                </div>
              </div>
            </div>

            {/* Video Information */}
            <div className="mt-6">
              {/* Title */}
              <h1 className="text-gray-900 mb-4">강남역 다중 추돌 사고 현장 영상</h1>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  교통사고
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  야간
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-gray-900 mb-2">설명</h3>
                <p className="text-gray-600">
                  2025년 11월 28일, 강남역 앞 횡단보도에서 발생한 교통사고 현장 영상입니다.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">촬영 시간</p>
                  <p className="text-gray-900">2025-11-28 14:32</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">업로드 시간</p>
                  <p className="text-gray-900">2025-11-28 15:10</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">촬영 위치</p>
                  <p className="text-gray-900">서울시 강남구 강남대로 396</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">영상 길이</p>
                  <p className="text-gray-900">32초</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">해상도</p>
                  <p className="text-gray-900">1080p</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Panel */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">가격</p>
                <p className="text-gray-900 text-3xl mb-1">₩30,000</p>
                <p className="text-gray-500 text-sm">
                  뉴스 보도용 1회 사용 라이선스
                </p>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-700">현재 보유 크레딧</p>
                <p className="text-gray-900">₩300,000</p>
              </div>

              <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors mb-4">
                크레딧으로 구매
              </button>

              <p className="text-gray-500 text-sm">
                구매 시 워터마크 없는 원본 영상과 라이선스 정보를 다운로드할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="mt-12">
          <h2 className="text-gray-900 mb-6">관련 제보 영상</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                id: "1",
                thumbnail: "https://images.unsplash.com/photo-1712640379137-6d2532f887a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZW1lcmdlbmN5fGVufDF8fHx8MTc2NDU1NjI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "아파트 화재 발생 초기 영상",
                price: 45000,
              },
              {
                id: "2",
                thumbnail: "https://images.unsplash.com/photo-1700306903717-0f6b47436dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwcm90ZXN0fGVufDF8fHx8MTc2NDU1NjI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "시민 집회 현장 영상",
                price: 20000,
              },
              {
                id: "3",
                thumbnail: "https://images.unsplash.com/photo-1657069342866-2d11c2509b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZGVkJTIwc3RyZWV0fGVufDF8fHx8MTc2NDQ0MDA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "폭우로 인한 도로 침수 상황",
                price: 25000,
              },
              {
                id: "4",
                thumbnail: "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudHxlbnwxfHx8fDE3NjQ1MTA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "고속도로 다중 추돌 사고",
                price: 35000,
              },
            ].map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-gray-900 text-sm mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-900 text-sm">₩{video.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}