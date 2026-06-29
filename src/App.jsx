import { useState } from "react";
import Header from "./components/layout/Header";
import GenZDigitalMuseum from "./pages/GenZDigitalMuseum";
import MemberContribution from "./pages/MemberContribution";
import DigitalTools from "./pages/DigitalTools";
import DigitalQuiz from "./pages/DigitalQuiz";
import HistoricalChat from "./pages/HistoricalChat";
import GenZPerspective from "./pages/GenZPerspective";
import DigitalMuseum from "./pages/DigitalMuseum";
import Mindmap from "./pages/HistoricalMindmap";
export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Cơ chế chuyển trang (Render có điều kiện) */}
      {activeTab === "home" && <GenZDigitalMuseum />}
      {activeTab === "member" && <MemberContribution />}
      {activeTab === "tools" && <DigitalTools />}
      {activeTab === "quiz" && <DigitalQuiz />}
      {activeTab === "chat" && <HistoricalChat />}
      {activeTab === "genz" && <GenZPerspective />}
      {activeTab === "museum" && <DigitalMuseum />}
      {activeTab === "mindmap" && <Mindmap />}
      {activeTab !== "home" &&
        activeTab !== "member" &&
        activeTab !== "tools" &&
        activeTab !== "quiz" &&
        activeTab !== "chat" &&
        activeTab !== "genz" &&
        activeTab !== "museum" &&
        activeTab !== "mindmap" && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-500 space-y-2">
            <span className="text-2xl">✦</span>
            <p className="text-sm tracking-wider uppercase">
              Tính năng đang được phát triển số hóa...
            </p>
          </div>
        )}
    </div>
  );
}
