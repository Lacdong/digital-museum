import { useState } from "react";
import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";
import { challengesData, quizDatabase } from "../data/quiz";

export default function DigitalQuiz() {
  // --- Các Trạng Thái Vận Hành ---
  const [gameState, setGameState] = useState("dashboard"); // 'dashboard' | 'playing' | 'finished'
  const [activeFilter, setActiveFilter] = useState("all");

  // Khôi phục bộ nhớ đệm LocalStorage (Lazy Initialization - Sạch lỗi ESLint)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("real_quiz_heatmap_history");
    return saved ? JSON.parse(saved) : [];
  });

  // Trạng thái của bài test đang được chọn chạy
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [sessionScore, setSessionScore] = useState(0);

  // --- Thuật toán tính màu Heatmap dựa trên số lần cày bài ngày hôm đó ---
  const getHeatmapColorClass = (dateStr) => {
    const matchCount = history.filter((item) => item.date === dateStr).length;
    if (matchCount === 0) return "bg-[#1A2333] border-transparent";
    if (matchCount === 1)
      return "bg-yellow-600/50 border-yellow-500/30 text-white";
    if (matchCount === 2)
      return "bg-yellow-500 border-yellow-400/50 text-black";
    if (matchCount === 3)
      return "bg-orange-500 border-orange-400/50 text-white";
    return "bg-red-500 border-red-400/50 text-white animate-pulse";
  };

  // Tự động dựng lưới lịch 6 tuần gần nhất (42 ô vuông kĩ thuật số)
  const generateHeatmapGrid = () => {
    const cells = [];
    const today = new Date();
    const daysToMonday = today.getDay() === 0 ? 6 : today.getDay() - 1;
    const startMonday = new Date(today);
    startMonday.setDate(today.getDate() - daysToMonday - 35);

    for (let w = 0; w < 6; w++) {
      for (let d = 0; d < 7; d++) {
        const cellDate = new Date(startMonday);
        cellDate.setDate(startMonday.getDate() + w * 7 + d);
        cells.push(cellDate.toLocaleDateString("vi-VN"));
      }
    }
    return cells;
  };

  const totalXP = history.reduce((sum, item) => sum + item.xpGained, 0);

  // Thuật toán động: Tự động kiểm tra điều kiện mở khóa bài học bằng XP thực
  const isLockedByXP = (challenge) => {
    if (challenge.id === "test-4" || challenge.id === "test-5")
      return totalXP < 300;
    if (challenge.id === "test-8" || challenge.id === "test-9")
      return totalXP < 600;
    return false;
  };

  // Tính tiến độ phần trăm hoàn thành thực tế trên máy này
  const completedChallengesCount = new Set(
    history
      .filter((h) => h.challengeId !== "special-event")
      .map((item) => item.challengeTitle),
  ).size;
  const progressPercent = Math.round((completedChallengesCount / 9) * 100);

  // Tính toán chuỗi liên tục (Streak)
  const calculateStreak = () => {
    if (history.length === 0) return 0;
    const uniqueDates = [...new Set(history.map((item) => item.date))]
      .map((d) => {
        const [day, month, year] = d.split("/");
        return new Date(year, month - 1, day).getTime();
      })
      .sort((a, b) => b - a);

    let streak = 0;
    let expectedDate = new Date();
    expectedDate.setHours(0, 0, 0, 0);
    if (expectedDate.getTime() - uniqueDates[0] > 24 * 60 * 60 * 1000) return 0;

    for (let i = 0; i < uniqueDates.length; i++) {
      const diff = expectedDate.getTime() - uniqueDates[i];
      if (diff === 0 || diff === 24 * 60 * 60 * 1000) {
        streak++;
        expectedDate.setTime(uniqueDates[i]);
      } else {
        break;
      }
    }
    return streak === 0 ? 1 : streak;
  };

  const startChallenge = (challenge) => {
    if (challenge.id !== "special-event" && isLockedByXP(challenge)) return;
    setCurrentChallenge(challenge);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSessionScore(0);
    setGameState("playing");
  };

  const handleSelectOption = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === quizDatabase[currentChallenge.id][currentIndex].correctAnswer) {
      setSessionScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const activeQuestions = quizDatabase[currentChallenge.id];
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      const finalScore =
        sessionScore +
        (selectedAnswer === activeQuestions[currentIndex].correctAnswer
          ? 1
          : 0);
      const todayStr = new Date().toLocaleDateString("vi-VN");

      // 💡 CẤU HÌNH ĐẶC BIỆT: Nếu là sự kiện đặc biệt thì X2 điểm thưởng (+100 XP mỗi câu trúng)
      const isEvent = currentChallenge.id === "special-event";
      const xpMultiplier = isEvent ? 100 : 50;

      const newAttempt = {
        id: Date.now(),
        date: todayStr,
        challengeId: currentChallenge.id,
        challengeTitle: currentChallenge.title,
        score: finalScore,
        xpGained: finalScore * xpMultiplier,
      };

      const updatedHistory = [newAttempt, ...history];
      setHistory(updatedHistory);
      localStorage.setItem(
        "real_quiz_heatmap_history",
        JSON.stringify(updatedHistory),
      );
      setGameState("finished");
    }
  };

  const activeQuestions = currentChallenge
    ? quizDatabase[currentChallenge.id]
    : [];
  const currentQ = activeQuestions[currentIndex];

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* 1. MÀN HÌNH DASHBOARD TRUNG TÂM */}
          {gameState === "dashboard" && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-black tracking-wide uppercase flex items-center justify-center space-x-2 text-gray-100">
                  <span>Thử thách Lịch sử Số</span>
                </h1>
                <p className="text-gray-400 text-xs max-w-xl mx-auto mt-2 leading-relaxed">
                  Biến kiến thức thành sức mạnh! Vượt qua các thử thách, thu
                  thập huy hiệu và khẳng định bản thân trong bảng xếp hạng 'Nhà
                  thám hiểm Bảo tàng' của Gen Z.
                </p>
              </div>

              {/* KHỐI TIẾN ĐỘ THIẾT BỊ & HEATMAP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 bg-[#121824] border border-gray-800 p-5 rounded-xl flex items-center space-x-4 shadow-xl">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <svg
                      className="w-6 h-6 text-blue-400 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M19.5 5.25l-1.5-1.5h-12l-1.5 1.5m15 0H3"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400 font-mono">
                        TRẠM KHÁM PHÁ 
                      </h3>
                      <span className="text-[9px] uppercase font-black tracking-widest text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                        Local Browser Storage
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                        <span>Tiến độ số hóa</span>
                        <span className="text-blue-400 font-mono">
                          {progressPercent}% ({completedChallengesCount}/9)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1A2333] rounded-full overflow-hidden border border-gray-800 p-[1px]">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1.5 border-t border-gray-800/60 text-xs">
                      <div>
                        <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                          Tổng XP máy này
                        </div>
                        <div className="font-mono font-extrabold text-yellow-500 text-xs mt-0.5">
                          {totalXP.toLocaleString()} XP
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                          Chuỗi ngày 🔥
                        </div>
                        <div className="font-mono font-extrabold text-orange-500 text-xs mt-0.5">
                          {calculateStreak()} Ngày
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Khối vẽ ô vuông Github Heatmap */}
                <div className="lg:col-span-8 bg-[#121824] border border-gray-800 p-5 rounded-xl shadow-xl flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">
                    <span>Lưới hoạt động cày bài trắc nghiệm máy này</span>
                    <div className="flex items-center space-x-1.5">
                      <span>Thấp</span>
                      <div className="w-2.5 h-2.5 bg-[#1A2333] rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-600/50 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-sm"></div>
                      <span>Cao</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 overflow-x-auto py-2">
                    <div className="grid grid-rows-7 gap-1.5 text-[9px] text-gray-500 font-bold uppercase select-none w-8 shrink-0">
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
                      <div>CN</div>
                    </div>
                    <div className="grid grid-rows-7 grid-flow-col gap-1.5 flex-1">
                      {generateHeatmapGrid().map((dateKey, idx) => (
                        <div
                          key={idx}
                          className={`w-4 h-4 rounded-sm border transition-all duration-300 tooltipped relative ${getHeatmapColorClass(dateKey)}`}
                        >
                          <span className="tooltip-text text-[9px] bg-black text-white px-2 py-1 rounded absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap hidden z-50 shadow-xl border border-gray-800">
                            Ngày {dateKey}:{" "}
                            {history.filter((h) => h.date === dateKey).length}{" "}
                            bài đạt điểm
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* BỘ LỌC VÀ LƯỚI 9 BÀI KIỂM TRA */}
              <div className="flex items-center justify-between border-b border-gray-800/80 pb-3">
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                  <span className="text-blue-500">❖</span>
                  <span>Danh sách 9 bài kiểm tra chuẩn hóa</span>
                </h2>
                <div className="flex space-x-2 bg-[#121824] p-1 rounded-lg border border-gray-800/60">
                  {[
                    ["all", "Tất cả"],
                    ["not-played", "Chưa làm"],
                    ["locked", "Yêu cầu cao"],
                  ].map(([f, label]) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`text-[10px] font-bold px-3 py-1 rounded-md transition uppercase tracking-wider ${activeFilter === f ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challengesData
                  .filter((c) => {
                    if (activeFilter === "not-played") return !isLockedByXP(c);
                    if (activeFilter === "locked") return isLockedByXP(c);
                    return true;
                  })
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#121824] border border-gray-800/60 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between relative group hover:border-gray-700 transition duration-300"
                    >
                      {isLockedByXP(item) && (
                        <div className="absolute inset-0 bg-[#0B0F17]/85 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center space-y-2">
                          <span>🔒</span>
                          <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase bg-red-500/10 px-2 py-0.5 border border-red-500/20 rounded">
                            Cần đạt{" "}
                            {item.id === "test-8" || item.id === "test-9"
                              ? "600"
                              : "300"}{" "}
                            XP để mở
                          </span>
                        </div>
                      )}
                      <div>
                        <div className="w-full h-24 relative overflow-hidden bg-gray-900">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-50"
                          />
                          <span className="absolute top-3 right-3 text-[9px] bg-black/60 px-2 py-0.5 rounded border border-gray-700 font-bold text-yellow-500">
                            +{item.xp} XP
                          </span>
                        </div>
                        <div className="p-4 space-y-1.5">
                          <span className="text-[9px] bg-gray-800 text-gray-400 border border-gray-700 px-2 py-0.5 rounded font-bold uppercase">
                            BÀI KIỂM TRA
                          </span>
                          <h3 className="text-xs md:text-sm font-bold text-gray-200 line-clamp-2 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <button
                          onClick={() => startChallenge(item)}
                          className="w-full text-center text-xs font-bold py-2 px-4 rounded-lg border bg-blue-600 border-blue-500 hover:bg-blue-500 text-white transition"
                        >
                          Bắt đầu làm bài &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* KHỐI 1: NHIỆM VỤ HÀNG NGÀY (DAILY QUESTS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {[1, 2, 3, 4].map((q) => (
                  <div
                    key={q}
                    className="bg-[#121824] border border-gray-800/50 p-4 rounded-xl flex items-center space-x-3 group hover:border-yellow-500/30 transition duration-300"
                  >
                    <div className="w-9 h-9 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg flex items-center justify-center text-sm shrink-0">
                      🪙
                    </div>
                    <div>
                      <span className="text-[9px] text-yellow-500 font-bold uppercase tracking-wider block">
                        Nhiệm vụ ngày
                      </span>
                      <h4 className="text-xs font-bold text-gray-200 mt-0.5">
                        Trả lời 5 câu hỏi nhanh
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        Phần thưởng: +50 XP
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 💡 KHỐI 2: BANNER SỰ KIỆN ĐẶC BIỆT ĐÃ ĐƯỢC KẾT NỐI HÀM STARTCHALLENGE */}
              <div className="bg-gradient-to-r from-blue-950/40 via-[#121824] to-blue-950/40 border border-blue-500/20 p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-xl mt-6">
                <div className="absolute right-8 bottom-0 opacity-10 pointer-events-none text-blue-500 text-9xl font-black select-none transform translate-y-1/4 group-hover:scale-110 transition duration-500">
                  ⚡
                </div>
                <div className="relative z-10 max-w-2xl space-y-3">
                  <span className="text-[9px] bg-blue-600 text-white font-bold px-2.5 py-0.5 rounded border border-blue-400 uppercase tracking-widest inline-block animate-pulse">
                    Sự kiện đặc biệt
                  </span>
                  <h2 className="text-base md:text-lg font-black tracking-wide text-gray-100">
                    Thử thách: Đảng và Thanh niên
                  </h2>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Tham gia sự kiện kỷ niệm ngày thành lập Đoàn TNCS Hồ Chí
                    Minh. Nhận gấp đôi XP và huy hiệu 'Thủ lĩnh trẻ' duy nhất
                    trong tháng này!
                  </p>
                  <div className="pt-2">
                    {/* Gọi gói quiz "special-event" đặc biệt */}
                    <button
                      onClick={() =>
                        startChallenge({
                          id: "special-event",
                          title: "Thử thách Đặc biệt: Đảng và Thanh niên",
                        })
                      }
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 px-5 rounded-lg border border-blue-500 shadow-md shadow-blue-500/10 transition duration-200"
                    >
                      Tham gia ngay &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. MÀN HÌNH ĐANG LÀM BÀI TRẮC NGHIỆM */}
          {gameState === "playing" && currentQ && (
            <div className="max-w-2xl mx-auto bg-[#121824] border border-gray-800 p-6 md:p-8 rounded-xl shadow-2xl min-h-[420px] flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 border-b border-gray-800/80 pb-3">
                  <span className="uppercase text-blue-400 max-w-[70%] truncate">
                    {currentChallenge?.title}
                  </span>
                  <span>
                    CÂU {currentIndex + 1} / {activeQuestions.length}
                  </span>
                </div>

                <h2 className="text-sm md:text-base font-bold text-gray-100 bg-[#161D2D] p-4 rounded-lg border border-gray-800/60 leading-relaxed">
                  {currentQ.question}
                </h2>

                <div className="space-y-3">
                  {currentQ.options.map((opt, oIdx) => {
                    let btnStyle =
                      "border-gray-800 bg-[#161D2D] hover:border-gray-700 text-gray-300";
                    if (selectedAnswer !== null) {
                      if (oIdx === currentQ.correctAnswer)
                        btnStyle =
                          "border-green-500/40 bg-green-500/10 text-green-400 font-bold";
                      else if (oIdx === selectedAnswer)
                        btnStyle =
                          "border-red-500/40 bg-red-500/10 text-red-400 font-bold";
                      else
                        btnStyle =
                          "border-gray-800/30 bg-[#161D2D]/30 text-gray-600 cursor-not-allowed";
                    }
                    return (
                      <button
                        key={oIdx}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left p-3 text-xs rounded-lg border transition duration-150 flex items-center space-x-3 ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedAnswer !== null && (
                <div className="pt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-white text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md hover:bg-gray-200 transition"
                  >
                    {currentIndex === activeQuestions.length - 1
                      ? "Nộp bài & Lưu kết quả"
                      : "Câu tiếp theo →"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 3. MÀN HÌNH TỔNG KẾT ĐIỂM SỐ */}
          {gameState === "finished" && (
            <div className="max-w-md mx-auto bg-[#121824] border border-gray-800 p-8 rounded-xl text-center shadow-2xl space-y-6">
              <div className="text-4xl">⚡</div>
              <div className="space-y-1">
                <h2 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 uppercase tracking-wide">
                  Mã hóa kết quả thành công!
                </h2>
                <p className="text-gray-400 text-[11px] max-w-xs mx-auto leading-tight">
                  Lịch sử làm bài đã ghi nhận vĩnh viễn vào ô Heatmap hoạt động
                  của bạn.
                </p>
              </div>

              <div className="p-4 bg-[#161D2D] rounded-lg border border-gray-800 w-full space-y-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Bài kiểm tra vừa hoàn thành
                </div>
                <div className="text-xs text-gray-200 font-bold line-clamp-1 mb-2">
                  {currentChallenge?.title}
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Đạt điểm số
                </div>
                <div className="text-3xl font-black font-mono text-yellow-500">
                  {sessionScore} / 10
                </div>
              </div>

              <div>
                <button
                  onClick={() => setGameState("dashboard")}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg shadow-lg transition"
                >
                  Quay lại Dashboard & Kiểm tra ô Lịch
                </button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tooltipped:hover .tooltip-text { display: block; }
      `,
        }}
      />
    </div>
  );
}
