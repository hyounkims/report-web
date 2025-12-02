import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import JournalistLogin from "./components/JournalistLogin";
import JournalistPurchasedVideos from "./components/JournalistPurchasedVideos";
import JournalistVideoDetail from "./components/JournalistVideoDetail";
import JournalistVideoList from "./components/JournalistVideoList";
import MyReportsScreen from "./components/MyReportsScreen";
import ReportInfoScreen from "./components/ReportInfoScreen";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JournalistLogin />} />
          <Route path="/purchased" element={<JournalistPurchasedVideos />} />
          <Route path="/video-list" element={<JournalistVideoList />} />
          <Route path="/video-detail" element={<JournalistVideoDetail />} />
          {/* <Route path="/my-reports" element={<MyReportsScreen />} />
          <Route path="/report-info" element={<ReportInfoScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
