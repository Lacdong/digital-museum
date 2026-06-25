import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";

export default function GenZDigitalMuseum() {
  const milestones = [
    // 💡 Thêm thuộc tính glowColor tương ứng với màu của từng viền tròn
    {
      year: "1930",
      title: "THÀNH LẬP ĐẢNG",
      borderColor: "border-yellow-600",
      glowColor: "rgba(234, 179, 8, 0.5)",
    },
    {
      year: "1945",
      title: "GIÀNH ĐỘC LẬP",
      borderColor: "border-gray-500",
      glowColor: "rgba(255, 255, 255, 0.4)",
    },
    {
      year: "1975",
      title: "THỐNG NHẤT ĐẤT NƯỚC",
      borderColor: "border-yellow-600",
      glowColor: "rgba(234, 179, 8, 0.5)",
    },
    {
      year: "1986",
      title: "ĐỔI MỚI",
      borderColor: "border-blue-600",
      glowColor: "rgba(37, 99, 235, 0.6)",
    },
    {
      year: "2026",
      title: "VIỆT NAM SỐ HÔM NAY",
      borderColor: "border-blue-400",
      glowColor: "rgba(96, 165, 250, 0.6)",
    },
  ];

  const features = [
    {
      title: "Phòng Triển Lãm Số",
      desc: "Bước vào 5 không gian thực tế ảo tái hiện sinh động từng giai đoạn lịch sử từ 1930 đến nay.",
      linkText: "Vào tham quan >",
      icon: (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Góc Nhìn Gen Z",
      desc: 'Những câu chuyện "Nếu như" và góc nhìn mới mẻ của người trẻ về các cột mốc lịch sử quan trọng.',
      linkText: "Xem bài viết >",
      icon: (
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Thử Thách Tương Tác",
      desc: "Kiểm tra kiến thức qua các mini-game và Quiz hấp dẫn để nhận những huy hiệu vinh danh độc đáo.",
      linkText: "Chơi ngay >",
      icon: (
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l92-7-9-7-9 7v7zm0 0l-9-7 9-7 9 7v7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      {/* Gọi component sao rơi làm hình nền */}
      <FallingStars />

      {/* Bọc toàn bộ nội dung trong lớp z-10 để nổi bật lên trên nền sao rơi */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto pt-16 pb-20 px-6 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-yellow-500 font-semibold mb-8">
            Khám phá kỷ nguyên số
          </span>

          {/* Milestones Horizontal Line */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {milestones.map((ms, index) => (
              <div key={index} className="flex flex-col items-center w-24">
                {/* 💡 Đã thêm class 'animate-milestones-glow' và gán biến style động ở đây */}
                <div
                  className={`w-14 h-14 rounded-full border-2 ${ms.borderColor} flex items-center justify-center bg-[#111622] text-[11px] font-bold tracking-tight mb-2 text-gray-300 animate-milestones-glow`}
                  style={{
                    "--glow-color": ms.glowColor,
                    animationDelay: `${index * 0.4}s`, // Tạo hiệu ứng gợn sóng lấp lánh cách nhau 0.4 giây
                  }}
                >
                  {ms.year}
                </div>
                <span className="text-[9px] text-gray-400 font-medium leading-tight uppercase tracking-wider">
                  {ms.title}
                </span>
              </div>
            ))}
          </div>

          {/* Hero Headings */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight mb-6">
            GIẢI MÃ LỊCH SỬ ĐẢNG <br /> QUA TƯ DUY SỐ
          </h1>

          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-wide mb-8 shadow-[0_0_15px_rgba(234,179,8,0.1)] animate-badge-glow">
            ĐẢNG CỘNG SẢN VIỆT NAM
          </div>

          <p className="text-gray-400 text-sm max-w-xl leading-relaxed mb-10">
            Trải nghiệm hành trình lịch sử của Đảng Cộng sản Việt Nam thông qua
            góc nhìn hiện đại, trực quan và tương tác dành riêng cho thế hệ Gen
            Z.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-gray-900 border border-gray-700 hover:border-gray-500 text-white text-sm font-medium px-6 py-3 rounded-md transition duration-200">
              Bắt đầu hành trình &rarr;
            </button>
            <button className="bg-transparent hover:bg-gray-900 text-gray-300 text-sm font-medium px-6 py-3 rounded-md transition duration-200">
              Khám phá Mindmap
            </button>
          </div>

          {/* Scroll Down */}
          <div className="flex flex-col items-center space-y-1 text-gray-500 text-[10px] tracking-widest uppercase">
            <span>Cuộn xuống</span>
            <span className="animate-bounce">↓</span>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-[#121824] border border-gray-800/60 p-6 rounded-lg hover:border-gray-700 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#1A2333] p-2.5 rounded-md inline-block mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-100">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-400 font-medium text-xs transition"
              >
                {feat.linkText}
              </a>
            </div>
          ))}
        </section>

        {/* Visual Banner Quote Section */}
        <section className="my-16 relative overflow-hidden bg-gradient-to-r from-blue-950/60 via-[#0B0F17] to-blue-950/60 border-y border-gray-800/40 py-20 px-6 text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-blue-400 text-xl">✦</span>
            <h2 className="text-xl md:text-3xl italic font-medium text-gray-200 leading-relaxed tracking-wide">
              "Lịch sử không chỉ là những trang sách,{" "}
              <br className="hidden md:block" /> mà là dòng chảy kiến tạo tương
              lai."
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold pt-2">
              Tầm nhìn Gen Z Digital Museum
            </p>
          </div>
        </section>

        {/* Action / Statistics Banner Box */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-gradient-to-br from-[#121825] to-[#0D131F] border border-gray-800 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Contents */}
            <div className="space-y-6 max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Bạn đã sẵn sàng bước vào cuộc <br className="hidden md:block" />{" "}
                hành trình?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Hàng ngàn tư liệu quý giá, những câu chuyện chưa kể và những
                trải nghiệm tương tác đỉnh cao đang chờ đợi bạn khám phá.
              </p>

              {/* Stats info */}
              <div className="flex gap-8 pt-4 border-t border-gray-800/60">
                <div>
                  <div className="text-xl font-bold text-yellow-500">5+</div>
                  <div className="text-[10px] text-gray-500 uppercase font-medium">
                    Triển lãm
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-400">100+</div>
                  <div className="text-[10px] text-gray-500 uppercase font-medium">
                    Tư liệu số
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-400">20+</div>
                  <div className="text-[10px] text-gray-500 uppercase font-medium">
                    Thử thách Quiz
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[200px]">
              <button className="w-full bg-white text-black font-semibold text-sm py-3 px-6 rounded-md hover:bg-gray-200 transition duration-200 text-center">
                Khám phá ngay
              </button>
              <button className="w-full bg-[#0B0F17] text-white border border-gray-700 font-medium text-sm py-3 px-6 rounded-md hover:bg-gray-900 transition duration-200 text-center">
                Hỏi đáp AI Chatbot
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
    @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 6px var(--glow-color);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 20px var(--glow-color);
      transform: scale(1.06);
      text-shadow: 0 0 4px #ffffff;
    }
  }
  .animate-milestones-glow {
    animation: pulseGlow 3s infinite ease-in-out;
  }

  
  @keyframes badgePulse {
    0%, 100% {
      box-shadow: 0 0 15px rgba(234, 179, 8, 0.15), inset 0 0 5px rgba(234, 179, 8, 0.1);
      border-color: rgba(234, 179, 8, 0.3);
      filter: brightness(1);
    }
    50% {
      box-shadow: 0 0 30px rgba(234, 179, 8, 0.5), inset 0 0 12px rgba(234, 179, 8, 0.3);
      border-color: rgba(234, 179, 8, 0.9);
      text-shadow: 0 0 10px rgba(234, 179, 8, 0.8);
      filter: brightness(1.2); /* Khẽ sáng bừng lên */
    }
  }
  .animate-badge-glow {
    animation: badgePulse 2.5s infinite ease-in-out;
  }
`,
        }}
      />
    </div>
  );
}
