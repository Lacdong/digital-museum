import { useState } from "react";
import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";
import { membersData } from "../data/member"; // 💡 Gọi mảng danh sách mới

export default function MemberContribution() {
  // Trạng thái lưu thành viên đang chọn (Mặc định chọn người đầu tiên)
  const [selectedMemberId, setSelectedMemberId] = useState(membersData[0].id);

  // Tìm kiếm đối tượng dữ liệu cụ thể tương ứng với ID đang chọn
  const memberInfo =
    membersData.find((m) => m.id === selectedMemberId) || membersData[0];

  // --- Logic xử lý vẽ biểu đồ Radar SVG tự động cập nhật theo memberInfo ---
  const center = 150;
  const maxRadius = 100;
  const totalAxes = memberInfo.stats.length;

  const getCoordinates = (index, value) => {
    const angle = ((Math.PI * 2) / totalAxes) * index - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  };

  const polygonPoints = memberInfo.stats
    .map((stat, i) => {
      const { x, y } = getCoordinates(i, stat.value);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* TIÊU ĐỀ TRANG + MENU CHỌN THÀNH VIÊN ĐỘNG */}
          <div className="flex flex-col items-center justify-center mb-12 text-center space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 inline-block">
                Hệ thống quản trị nhân sự số
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase">
                Đánh giá mức độ đóng góp
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* 💡 Dropdown chọn nhân sự phong cách số hóa */}
            <div className="pt-2">
              <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mr-3">
                Nhân sự số:
              </label>
              <select
                value={selectedMemberId}
                onChange={(e) => setSelectedMemberId(e.target.value)}
                className="bg-[#121824] border border-gray-700 text-sm font-semibold text-gray-200 px-4 py-2 rounded-md outline-none focus:border-blue-500 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)] transition"
              >
                {membersData.map((member) => (
                  <option
                    key={member.id}
                    value={member.id}
                    className="bg-[#121824] text-white"
                  >
                    {member.name} ({member.role.split(" / ")[0]})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bố cục 2 Cột (Tự động cập nhật số liệu chuẩn xác khi đổi thành viên) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* CỘT TRÁI */}
            <section className="lg:col-span-5 space-y-6">
              <div className="bg-[#121824] border border-gray-800/80 p-6 rounded-xl flex flex-col items-center shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <div className="flex items-center space-x-4 w-full pb-6 border-b border-gray-800/60 mb-6">
                  <div>
                     <div className="text-[10px] text-yellow-500 font-mono tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded inline-block uppercase font-bold">
                        ID: {memberInfo.id}
                      </div>
                    <h2 className="text-lg font-bold text-gray-100">
                      {memberInfo.name}
                    </h2>

                    <p className="text-xs text-blue-400 font-medium">
                      {memberInfo.role}
                    </p>
                  </div>
                </div>

                {/* Biểu đồ Radar */}
                <div className="w-full flex justify-center py-4 relative">
                  <svg
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    className="overflow-visible"
                  >
                    {[25, 50, 75, 100].map((level, i) => {
                      const points = Array.from({ length: totalAxes })
                        .map((_, idx) => {
                          const { x, y } = getCoordinates(idx, level);
                          return `${x},${y}`;
                        })
                        .join(" ");
                      return (
                        <polygon
                          key={i}
                          points={points}
                          fill="none"
                          stroke="#1F2937"
                          strokeWidth="1"
                          strokeDasharray={level === 100 ? "0" : "4,4"}
                        />
                      );
                    })}

                    {/* Các trục định vị */}
                    {Array.from({ length: totalAxes }).map((_, i) => {
                      const outerPoint = getCoordinates(i, 100);
                      return (
                        <line
                          key={i}
                          x1={center}
                          y1={center}
                          x2={outerPoint.x}
                          y2={outerPoint.y}
                          stroke="#1F2937"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Vùng Polygon phát sáng có hiệu ứng transition */}
                    <polygon
                      points={polygonPoints}
                      fill="rgba(59, 130, 246, 0.2)"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      className="animate-radar-pulse style-transition"
                    />

                    {/* Các nút tròn điểm số */}
                    {memberInfo.stats.map((stat, i) => {
                      const { x, y } = getCoordinates(i, stat.value);
                      return (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="#ffffff"
                          stroke="#a855f7"
                          strokeWidth="2"
                        />
                      );
                    })}

                    {/* Chữ nhãn */}
                    {memberInfo.stats.map((stat, i) => {
                      const textPos = getCoordinates(i, 120);
                      let textAnchor = "middle";
                      if (textPos.x < center - 20) textAnchor = "end";
                      if (textPos.x > center + 20) textAnchor = "start";

                      return (
                        <text
                          key={i}
                          x={textPos.x}
                          y={textPos.y + 4}
                          fill="#9CA3AF"
                          fontSize="10"
                          fontWeight="bold"
                          textAnchor={textAnchor}
                        >
                          {stat.label} ({stat.value})
                        </text>
                      );
                    })}
                  </svg>
                </div>

                {/* Thanh Đóng Góp (%) */}
                <div className="w-full mt-8 pt-6 border-t border-gray-800/60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
                      Tỷ lệ đóng góp dự án
                    </span>
                    <span className="text-sm font-extrabold text-yellow-500 animate-pulse">
                      {memberInfo.contributionRate}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#1A2333] rounded-full border border-gray-700/50 overflow-hidden p-[2px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-500 ease-out animate-progress-glow"
                      style={{ width: `${memberInfo.contributionRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            {/* CỘT PHẢI (Danh sách Task tương ứng của người đó) */}
            <section className="lg:col-span-7 bg-[#121824] border border-gray-800/80 p-6 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800/60">
                <h2 className="text-base font-bold tracking-wide uppercase text-gray-200 flex items-center space-x-2">
                  <span className="text-purple-500 text-lg">❖</span>
                  <span>Nhật ký công việc & Task đã thực hiện</span>
                </h2>
                <span className="text-[10px] bg-gray-800 text-gray-400 px-2.5 py-1 rounded-md border border-gray-700">
                  {memberInfo.tasks.length} hạng mục
                </span>
              </div>

              <div className="space-y-4 max-h-[510px] overflow-y-auto pr-2 custom-scrollbar">
                {memberInfo.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group bg-[#161D2D] border border-gray-800 hover:border-gray-700/80 p-4 rounded-lg transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wide uppercase ${task.color}`}
                        >
                          {task.type}
                        </span>
                        <span className="text-[10px] text-gray-500">
                          {task.date}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-gray-300 group-hover:text-white transition">
                        {task.title}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 self-start sm:self-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                      <span className="text-[11px] font-bold text-green-400 bg-green-500/5 px-2.5 py-1 border border-green-500/20 rounded-md">
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .style-transition { transition: all 0.4s ease-in-out; }
        @keyframes radarPulse {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.4)); opacity: 0.9; }
          50% { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); opacity: 1; }
        }
        .animate-radar-pulse { animation: radarPulse 3s infinite ease-in-out; }
        @keyframes progressSweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-progress-glow { background-size: 200% 200%; animation: progressSweep 4s infinite linear; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #121824; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1F2937; border-radius: 99px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3B82F6; }
      `,
        }}
      />
    </div>
  );
}
