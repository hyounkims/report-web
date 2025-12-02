import { ArrowLeft, Play, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ReportInfoScreen() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] bg-white flex flex-col overflow-hidden">
        {/* Top App Bar */}
        <div className="flex items-center px-4 py-4 border-b border-gray-200">
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="flex-1 text-center text-gray-900 pr-10">제보 정보 입력</h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
          {/* Video Preview Section */}
          <div className="mb-8">
            <h2 className="text-gray-900 mb-4">영상 미리보기</h2>
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1657514017554-7f48965c13d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdHJhZmZpY3xlbnwxfHx8fDE3NjQ0MjQ2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3">영상 길이: 32초</p>
          </div>

          {/* Basic Information Section */}
          <div className="mb-8">
            <h2 className="text-gray-900 mb-4">기본 정보 입력</h2>
            
            <div className="space-y-5">
              {/* Title Field */}
              <div>
                <label className="block text-gray-700 mb-2">제목</label>
                <input
                  type="text"
                  placeholder="예) XX역 앞 교통사고 현장"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-gray-700 mb-2">설명</label>
                <textarea
                  rows={4}
                  placeholder="무슨 일이 있었는지 간단히 적어주세요."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                />
              </div>

              {/* Recording Time Field */}
              <div>
                <label className="block text-gray-700 mb-2">촬영 시간</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value="2025-11-28 14:32"
                    readOnly
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900"
                  />
                  <button className="text-gray-700 px-4 py-3 hover:text-black transition-colors">
                    수정
                  </button>
                </div>
              </div>

              {/* Location Field */}
              <div>
                <label className="block text-gray-700 mb-2">촬영 위치</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value="서울시 관악구 ○○로 12"
                    readOnly
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900"
                  />
                  <button className="text-gray-700 px-4 py-3 hover:text-black transition-colors flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    지도 보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Automated Pricing Section */}
          <div className="mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-700 mb-3">예상 판매 가격</p>
              <p className="text-gray-900 mb-2">₩30,000</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                영상 길이, 품질, 촬영 정보를 기반으로 자동 계산된 가격입니다.
              </p>
              
              <div className="h-px bg-gray-300 mb-5"></div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">예상 수익(수수료 제외)</span>
                <span className="text-gray-900">₩24,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <button className="w-full bg-black text-white py-3.5 px-4 rounded-xl hover:bg-gray-800 transition-colors mb-3">
            제보 등록하기
          </button>
          <button className="w-full text-gray-600 py-2 hover:text-gray-900 transition-colors">
            나중에 다시 작성
          </button>
        </div>
      </div>
    </div>
  );
}
