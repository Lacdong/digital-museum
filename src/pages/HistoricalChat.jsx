import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";
import { historicalFigures } from "../data/historicalFigures";
import {
  Search,
  RotateCcw,
  History,
  Send,
  BookOpen,
  PhoneCall,
  CheckCircle,
  User,
  Cpu,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export default function HistoricalChat() {
  const [activeId, setActiveId] = useState(historicalFigures[0].id);
  const [inputMessage, setInputMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Khôi phục bộ nhớ đệm lịch sử chat (Lazy Initialization)
  const [chatLogs, setChatLogs] = useState(() => {
    const saved = localStorage.getItem("historical_chat_logs_v2");
    if (saved) return JSON.parse(saved);

    const defaultLogs = {};
    historicalFigures.forEach((fig) => {
      defaultLogs[fig.id] = [
        {
          id: `init-${fig.id}`,
          sender: "figure",
          text: fig.greeting,
          time: "10:00 AM",
        },
      ];
    });
    return defaultLogs;
  });

  const activeFigure =
    historicalFigures.find((f) => f.id === activeId) || historicalFigures[0];

  // SỬA LỖI EXHAUSTIVE-DEPS: Giữ vững cấu trúc tham chiếu của mảng tin nhắn qua useMemo
  const currentMessages = useMemo(() => {
    return chatLogs[activeId] || [];
  }, [chatLogs, activeId]);

  // Tự động cuộn mượt mà xuống đáy khung chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages.length, isTyping]);

  // Lọc danh sách nhân vật theo ô tìm kiếm công nghệ
  const filteredFigures = historicalFigures.filter((fig) =>
    fig.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // SỬA LỖI DUPLICATE & PURITY: Tách biệt luồng setTimeout ra ngoài updater an toàn
  const executeSendMessage = useCallback(
    (textToSend) => {
      if (!textToSend.trim() || isTyping) return;

      const timeStr = new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const userMsg = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: textToSend,
        time: timeStr,
      };

      setInputMessage("");
      setIsTyping(true);

      // 1. Cập nhật tin nhắn của Người dùng ngay lập tức
      setChatLogs((prevLogs) => {
        const nextLogs = {
          ...prevLogs,
          [activeId]: [...(prevLogs[activeId] || []), userMsg],
        };
        localStorage.setItem(
          "historical_chat_logs_v2",
          JSON.stringify(nextLogs),
        );
        return nextLogs;
      });

      // 2. Chạy đếm giờ riêng biệt bên ngoài (Chỉ kích hoạt duy nhất 1 lần)
      setTimeout(() => {
        let matchedResponse = activeFigure.fallback;
        const cleanText = textToSend.toLowerCase().trim();

        for (let item of activeFigure.brain) {
          if (item.keywords.some((kw) => cleanText.includes(kw))) {
            matchedResponse = item.response;
            break;
          }
        }

        const figureMsg = {
          id: `fig-${Date.now()}`,
          sender: "figure",
          text: matchedResponse,
          time: timeStr,
        };

        setChatLogs((prevLogs) => {
          const nextLogs = {
            ...prevLogs,
            [activeId]: [...(prevLogs[activeId] || []), figureMsg],
          };
          localStorage.setItem(
            "historical_chat_logs_v2",
            JSON.stringify(nextLogs),
          );
          return nextLogs;
        });

        setIsTyping(false);
      }, 1200);
    },
    [activeId, isTyping, activeFigure.fallback, activeFigure.brain],
  );

  // Hàm xóa lịch sử để bắt đầu cuộc trò chuyện mới
  const handleResetChat = () => {
    const resetMessages = [
      {
        id: `init-${activeFigure.id}`,
        sender: "figure",
        text: activeFigure.greeting,
        time: "10:00 AM",
      },
    ];
    setChatLogs((prev) => {
      const nextLogs = { ...prev, [activeId]: resetMessages };
      localStorage.setItem("historical_chat_logs_v2", JSON.stringify(nextLogs));
      return nextLogs;
    });
  };

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* BỐ CỤC 3 CỘT ĐỒNG BỘ 100% THEO FILE THIẾT KẾ VISILY */}
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 inline-block">
              Phòng thí nghiệm không gian ảo
            </span>
            <h1 className="text-xl md:text-2xl font-black tracking-wide uppercase flex items-center justify-center space-x-2 text-gray-100">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span>Kết nối Nhân vật Lịch sử AI</span>
            </h1>
            <p className="text-gray-400 text-xs max-w-xl mx-auto mt-2">
              Hệ thống lượng tử mối quan hệ xã hội phục dựng góc nhìn của các
              bậc Vĩ nhân lịch sử qua hội thoại tương tác số hóa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 items-stretch">
            {/* 🟦 CỘT TRÁI (Chiếm 3/12): DANH SÁCH "NGƯỜI DẪN ĐƯỜNG" */}
            <section className="lg:col-span-3 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wide flex items-center space-x-2 text-gray-100">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span>Người dẫn đường</span>
                  </h2>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Chọn một nhân vật lịch sử để bắt đầu cuộc hội thoại trí tuệ
                    nhân tạo.
                  </p>
                </div>

                {/* Thanh tìm kiếm nhân vật */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm nhân vật..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#121824] border border-gray-800/80 focus:border-blue-500/60 rounded-xl pl-10 pr-3.5 py-2 text-xs text-gray-300 outline-none transition placeholder-gray-600"
                  />
                </div>

                {/* Danh bạ danh sách */}
                <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                  {filteredFigures.map((fig) => {
                    const isActive = fig.id === activeId;
                    return (
                      <button
                        key={fig.id}
                        onClick={() => {
                          if (!isTyping) setActiveId(fig.id);
                        }}
                        disabled={isTyping}
                        className={`w-full text-left p-3 rounded-xl border flex items-center space-x-3 transition relative group ${
                          isActive
                            ? "bg-blue-950/30 border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.12)]"
                            : "bg-[#121824] border-gray-800/80 hover:border-gray-700"
                        }`}
                      >
                        <img
                          src={fig.avatar}
                          alt={fig.name}
                          className="w-10 h-10 rounded-full object-cover border border-gray-700"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-bold text-gray-200 group-hover:text-white transition">
                            {fig.name}
                          </h3>
                          <p className="text-[10px] text-gray-500 truncate mt-0.5">
                            {fig.title}
                          </p>
                        </div>
                        <span
                          className={`w-1.5 h-1.5 rounded-full absolute top-1/2 -translate-y-1/2 right-4 ${isActive ? "bg-blue-500 animate-pulse" : "bg-gray-800"}`}
                        ></span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hộp lưu ý bảo mật chân cột trái */}
              <div className="bg-blue-950/10 border border-blue-500/10 p-3 rounded-xl flex items-start space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-500 leading-normal">
                  <strong className="text-blue-400/80 block mb-0.5">
                    Lưu ý bảo mật
                  </strong>
                  Phản hồi được mô phỏng dựa trên dữ liệu lịch sử chính thống
                  địa phương.
                </p>
              </div>
            </section>

            {/* 🟩 CỘT GIỮA (Chiếm 6/12): TERMINAL ĐỐI THOẠI AI */}
            <section className="lg:col-span-6 bg-[#121824] border border-gray-800/80 rounded-2xl shadow-2xl flex flex-col justify-between min-h-[520px] max-h-[560px]">
              {/* Header điều khiển */}
              <div className="p-4 border-b border-gray-800/60 bg-[#0E1320]/40 flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-black text-gray-200 uppercase tracking-wide">
                    {activeFigure.name}
                  </h2>
                  <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5 text-emerald-400 animate-pulse">
                    AI ĐANG TRỰC TUYẾN
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-gray-500">
                  <button
                    onClick={handleResetChat}
                    className="hover:text-gray-300 transition text-[11px] font-semibold flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                  <button
                    onClick={() =>
                      alert("Hệ thống lượng tử hoạt động chính xác v2.0")
                    }
                    className="hover:text-gray-300 transition text-[11px] font-semibold flex items-center space-x-1"
                  >
                    <History className="w-3 h-3" />
                    <span>Nhật ký</span>
                  </button>
                </div>
              </div>

              {/* Vùng log hiển thị bong bóng tin nhắn */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar max-h-[380px]">
                {currentMessages.map((msg) => {
                  const isUser = msg.sender === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <span className="text-[9px] text-gray-500 font-mono mb-1 px-1">
                        {isUser ? "Thiết bị trạm" : activeFigure.name} •{" "}
                        {msg.time}
                      </span>
                      <div
                        className={`max-w-[88%] rounded-xl p-3 text-xs leading-relaxed shadow-sm ${
                          isUser
                            ? "bg-blue-600 text-white rounded-tr-none"
                            : "bg-[#161D2D] text-gray-300 border border-gray-800/60 rounded-tl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-[10px] text-cyan-400 font-mono pl-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Hệ thống lượng tử đang dịch quét ký ức...</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chân Khung Chat: Gợi ý nhanh + Thanh Form */}
              <div className="p-4 border-t border-gray-800/60 bg-[#0E1320]/20 space-y-3">
                {/* Thanh hiển thị các Chip gợi ý câu hỏi thông minh */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
                  {activeFigure.suggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      disabled={isTyping}
                      onClick={() => executeSendMessage(sug)}
                      className="text-[10px] font-bold text-gray-400 hover:text-white bg-[#161D2D] border border-gray-800 hover:border-gray-700 px-3 py-1.5 rounded-full transition shrink-0 flex items-center space-x-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                      <span>{sug}</span>
                    </button>
                  ))}
                </div>

                {/* Form Input nhập nội dung */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeSendMessage(inputMessage);
                  }}
                  className="relative flex items-center bg-[#161D2D] border border-gray-800 focus-within:border-blue-500 rounded-xl px-3 py-1.5 transition"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    disabled={isTyping}
                    placeholder={`Hỏi ${activeFigure.name} về điều gì đó...`}
                    className="flex-1 bg-transparent px-2 text-xs text-gray-200 outline-none placeholder-gray-600 py-1.5"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition flex items-center space-x-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span>Gửi</span>
                  </button>
                </form>
              </div>
            </section>

            {/* 🟨 CỘT PHẢI (Chiếm 3/12): HỒ SƠ CHI TIẾT VĨ NHÂN */}
            <section className="lg:col-span-3 flex flex-col justify-between space-y-4">
              <div className="bg-[#121824] border border-gray-800/80 rounded-2xl p-4 text-center shadow-xl space-y-5 flex-1 flex flex-col justify-center">
                <p className="text-[11px] text-gray-400 italic leading-relaxed px-2 font-medium">
                  {activeFigure.quote}
                </p>

                <div className="flex justify-center">
                  <img
                    src={activeFigure.avatar}
                    alt={activeFigure.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/40 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="text-sm font-black text-gray-100 uppercase tracking-wide">
                    {activeFigure.name}
                  </h2>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                    {activeFigure.title}
                  </p>
                </div>

                <div className="text-left space-y-1.5 pt-2 border-t border-gray-800/60">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <User className="w-3 h-3 text-gray-500" />
                    <span>Tiểu sử vắn tắt</span>
                  </span>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                    {activeFigure.bio}
                  </p>
                </div>

                <div className="text-left space-y-2 pt-2 border-t border-gray-800/60">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">
                    Phong thái hội thoại
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeFigure.styleTags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold px-2 py-0.5 bg-blue-500/5 text-blue-400 border border-blue-500/10 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-yellow-500/5 text-yellow-500 border border-yellow-500/20 rounded-md uppercase tracking-wider font-mono">
                      {activeFigure.tag}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-[#0E1320] hover:bg-gray-800 border border-gray-800 text-[10px] font-bold text-gray-400 hover:text-white py-2 rounded-lg transition flex items-center justify-center space-x-1.5">
                    <BookOpen className="w-3 h-3" />
                    <span>Xem tài liệu liên quan</span>
                  </button>
                </div>
              </div>

              {/* Hai ô widget thống kê kĩ thuật số dưới chân */}
              <div className="grid grid-cols-2 gap-3 shrink-0">
                <div className="bg-[#121824] border border-gray-800/80 p-3 rounded-xl text-center space-y-1">
                  <PhoneCall className="w-3.5 h-3.5 text-gray-500 mx-auto" />
                  <div className="text-[11px] font-black font-mono text-gray-200">
                    {activeFigure.callsCount} cuộc
                  </div>
                </div>
                <div className="bg-[#121824] border border-gray-800/80 p-3 rounded-xl text-center space-y-1">
                  <CheckCircle className="w-3.5 h-3.5 text-yellow-600 mx-auto" />
                  <div className="text-[11px] font-black font-mono text-yellow-500">
                    {activeFigure.accuracy} khớp
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1F2937; border-radius: 9px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #2563EB; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
}
