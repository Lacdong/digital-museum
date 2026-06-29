import { useState } from "react";
import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";
import CertificateModal from "../components/common/CertificateModal";
import { museumHalls } from "../data/museumData";
import {
  BookOpen,
  Map,
  Award,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Landmark,
  Compass,
  Sparkles,
  Users,
  Settings,
  Rocket,
} from "lucide-react";

export default function DigitalMuseum() {
  // Quản lý luồng chính: 'overview' (Màn 1) | 'hall' (Màn 2) | 'conclusion' (Màn 3)
  const [museumStep, setMuseumStep] = useState("overview");

  // Lưu số ID phòng đang xem chi tiết ở màn 2 (Từ phòng 1 đến phòng 5)
  const [activeHallId, setActiveHallId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tìm đối tượng dữ liệu phòng cụ thể đang hiển thị
  const currentHall =
    museumHalls.find((h) => h.id === activeHallId) || museumHalls[0];

  const handleNextHall = () => {
    if (activeHallId < 5) {
      setActiveHallId((prev) => prev + 1);
    } else {
      setMuseumStep("conclusion");
    }
  };

  const handlePrevHall = () => {
    if (activeHallId > 1) {
      setActiveHallId((prev) => prev - 1);
    } else {
      setMuseumStep("overview");
    }
  };

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        {/* ======================================================== */}
        {/* 🖼️ MÀN HÌNH 1: CÁC PHÒNG TRIỂN LÃM ẢO & ĐA PHƯƠNG TIỆN */}
        {/* ======================================================== */}
        {museumStep === "overview" && (
          <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-[10px] bg-blue-500/10 text-blue-400 font-bold px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest inline-block">
                Trải nghiệm thực tế ảo
              </span>

              {/* 💡 ĐÃ SỬA: Màu chữ ứng dụng hiệu ứng Gradient Xanh - Vàng chuẩn chỉ */}
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 leading-tight">
                Các Phòng Triển Lãm <br />
                Ảo & Đa Phương Tiện
              </h1>

              <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
                Hành trình xuyên thời gian được tái hiện qua công nghệ số 3D, dữ
                liệu lớn và trí tuệ nhân tạo. Hãy chọn một thời kỳ để bắt đầu
                giải mã những trang sử vàng của Đảng Cộng sản Việt Nam.
              </p>
            </div>

            {/* Lưới 5 phòng trưng bày giai đoạn lịch sử */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {museumHalls.map((hall) => (
                <div
                  key={hall.id}
                  style={{ backgroundImage: `url('${hall.cover}')` }}
                  className="group border border-gray-800 hover:border-blue-500/50 rounded-xl overflow-hidden min-h-[220px] flex flex-col justify-end p-5 relative bg-cover bg-center transition-all duration-300 shadow-lg cursor-pointer"
                  onClick={() => {
                    setActiveHallId(hall.id);
                    setMuseumStep("hall");
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/75 transition"></div>

                  <div className="relative z-10 space-y-2 w-full">
                    <span className="text-[9px] text-blue-400 font-bold uppercase font-mono tracking-wider bg-blue-500/5 border border-blue-500/20 px-2 py-0.5 rounded">
                      {hall.era}
                    </span>
                    <h3 className="text-sm font-black text-gray-200 group-hover:text-white transition line-clamp-1">
                      {hall.title.split(": ")[1]}
                    </h3>
                    <p className="text-gray-400 text-[11px] line-clamp-2 leading-relaxed">
                      {hall.desc}
                    </p>
                    <span className="text-[10px] font-bold text-blue-400 block pt-1 group-hover:translate-x-1 transition duration-200">
                      Click để xem chi tiết &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Thẻ tính năng chân trang 1 sử dụng Vector Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800/60">
              {[
                {
                  icon: <BookOpen className="w-4 h-4 text-blue-400" />,
                  label: "Lịch sử Sống động",
                  desc: "Tư liệu lưu trữ quý giá được số hóa 4K, mang lại cái nhìn chân thực.",
                },
                {
                  icon: <Map className="w-4 h-4 text-purple-400" />,
                  label: "Tương tác Gen Z",
                  desc: "Hệ thống mini-games và câu hỏi tương tác tích hợp trong không gian ảo.",
                },
                {
                  icon: <Award className="w-4 h-4 text-yellow-500" />,
                  label: "Huy hiệu Vinh danh",
                  desc: "Hoàn thành chặng hành trình để nhận chứng nhận điện tử lưu dấu hiểu biết.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex space-x-3.5 bg-[#121824]/40 border border-gray-800/40 p-4 rounded-xl"
                >
                  <div className="p-2.5 bg-[#161D2D] rounded-xl border border-gray-800 h-max shrink-0">
                    {f.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-200">
                      {f.label}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner kêu gọi cuối trang 1 */}
            <div className="bg-[#121824] border border-gray-800 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-base font-bold text-gray-100">
                  Bạn đã sẵn sàng bước vào không gian số?
                </h3>
                <p className="text-gray-500 text-xs max-w-md leading-relaxed">
                  Hàng nghìn tư liệu, hiện vật và những câu chuyện chưa kể đang
                  chờ bạn khám phá. Mọi bài học lịch sử đều bắt đầu từ một bước
                  chân.
                </p>
              </div>
              <div className="flex space-x-3 shrink-0">
                <button className="bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg border border-blue-500 transition shadow-lg shadow-blue-500/10">
                  Xem Sơ đồ Tư duy
                </button>
                <button className="bg-transparent hover:bg-gray-800 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg border border-gray-800 transition">
                  Thử thách Quiz
                </button>
              </div>
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* 🖼️ MÀN HÌNH 2: KHÔNG GIAN CHI TIẾT PHÒNG HÀNH TRÌNH ĐỘNG */}
        {/* ======================================================== */}
        {museumStep === "hall" && (
          <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
            <div className="text-center space-y-3 relative pb-4 border-b border-gray-800/60">
              <span className="text-[10px] bg-blue-500/10 text-blue-400 font-bold font-mono border border-blue-500/20 px-3 py-0.5 rounded-full uppercase tracking-wider">
                — BẢO TÀNG SỐ VIỆT NAM —
              </span>
              <h1 className="text-xl md:text-2xl font-black text-gray-100 uppercase tracking-wide">
                {currentHall.title}
              </h1>
              <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed">
                {currentHall.desc}
              </p>

              <div className="flex justify-center space-x-3 pt-2">
                <button
                  onClick={() => setMuseumStep("overview")}
                  className="bg-[#121824] hover:bg-gray-800 text-gray-400 hover:text-white text-[10px] font-bold px-4 py-1.5 rounded-md border border-gray-800 transition flex items-center space-x-1.5"
                >
                  <ArrowLeft className="w-3 h-3" />{" "}
                  <span>Quay lại Sảnh chính</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-md border border-blue-500 transition shadow-md shadow-blue-500/10 flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span>Lưu tài liệu phòng này</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* TRỤC THỜI GIAN BÊN TRÁI */}
              <section className="lg:col-span-3 bg-[#121824] border border-gray-800/80 p-4 rounded-xl space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Trục thời gian</span>
                </h3>
                <div className="relative pl-4 border-l border-gray-800 space-y-6 py-2">
                  {currentHall.timeline.map((time, idx) => (
                    <div key={idx} className="relative space-y-1 group">
                      <span className="w-2 h-2 rounded-full bg-blue-500 absolute -left-[21px] top-1 border border-[#0B0F17] group-hover:bg-cyan-400 transition"></span>
                      <div className="text-[11px] font-mono font-black text-blue-400 tracking-wider leading-none">
                        {time.year}
                      </div>
                      <p className="text-[11px] text-gray-400 group-hover:text-gray-200 transition font-medium">
                        {time.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KHU VỰC HIỂN THỊ TƯ LIỆU VÀ NHÂN VẬT BÊN PHẢI */}
              <section className="lg:col-span-9 space-y-8">
                {/* 1. Ảnh tư liệu & Hiện vật */}
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                    <Landmark className="w-3.5 h-3.5 text-amber-500" />
                    <span>Ảnh tư liệu & hiện vật</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentHall.relics.map((relic, i) => (
                      <div
                        key={i}
                        className="bg-[#121824] border border-gray-800/60 rounded-xl overflow-hidden group hover:border-gray-700 transition duration-300"
                      >
                        <div className="w-full h-28 overflow-hidden bg-gray-900">
                          <img
                            src={relic.img}
                            alt={relic.name}
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="p-3 space-y-1">
                          <span className="text-[8px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.2 rounded font-mono font-bold uppercase">
                            Ảnh tư liệu
                          </span>
                          <h4 className="text-xs font-bold text-gray-200 truncate">
                            {relic.name}
                          </h4>
                          <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
                            {relic.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Nhân vật lịch sử */}
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                    <Compass className="w-3.5 h-3.5 text-purple-500" />
                    <span>Nhân vật lịch sử</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentHall.figures.map((fig, i) => (
                      <div
                        key={i}
                        className="bg-[#121824] border border-gray-800/60 p-4 rounded-xl flex items-center space-x-3.5 hover:border-gray-700 transition"
                      >
                        <img
                          src={fig.img}
                          alt={fig.name}
                          className="w-11 h-11 rounded-full object-cover border border-gray-700 shrink-0"
                        />
                        <div className="min-w-0 space-y-0.5">
                          <span className="text-[8px] text-purple-400 font-bold uppercase tracking-wider block">
                            {fig.role}
                          </span>
                          <h4 className="text-xs font-bold text-gray-200 truncate">
                            {fig.name}
                          </h4>
                          <p className="text-[9px] text-gray-500 line-clamp-2 leading-normal font-medium">
                            {fig.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Thành tựu & Sự kiện cốt lõi */}
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Thành tựu & sự kiện</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentHall.events.map((evt, i) => (
                      <div
                        key={i}
                        className="bg-[#121824] border border-gray-800 p-4 rounded-xl space-y-2.5 relative overflow-hidden"
                      >
                        <div className="flex justify-between items-center text-[10px] font-mono font-black text-gray-500 border-b border-gray-800/60 pb-1.5">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-gray-600" />
                            <span>{evt.date}</span>
                          </span>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 bg-gray-800 px-1.5 rounded">
                            {evt.type}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-gray-200 line-clamp-1">
                            {evt.title}
                          </h4>
                          <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                            {evt.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* FOOTER ĐIỀU HƯỚNG DƯỚI ĐÁY MÀN HÌNH 2 */}
            <div className="pt-6 border-t border-gray-800/80 flex justify-between items-center text-xs font-bold">
              <button
                onClick={handlePrevHall}
                className="text-gray-400 hover:text-white transition uppercase tracking-widest flex items-center space-x-2"
              >
                <ArrowLeft className="w-3 h-3" /> <span>Quay lại phòng cũ</span>
              </button>

              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-gray-500">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${num === activeHallId ? "bg-blue-600 border-blue-500 text-white" : "border-gray-800"}`}
                  >
                    {num}
                  </span>
                ))}
              </div>

              <button
                onClick={handleNextHall}
                className="bg-blue-600 hover:bg-blue-500 text-white uppercase tracking-widest px-4 py-2 rounded border border-blue-500 shadow-md shadow-blue-500/10 flex items-center space-x-2"
              >
                <span>
                  {activeHallId === 5
                    ? "Hoàn thành hành trình"
                    : `Tiếp theo: Phòng ${activeHallId + 1}`}
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* 🖼️ MÀN HÌNH 3: TỔNG KẾT KHÓA HỌC & NHẬN CHỨNG CHỈ DIGITAL */}
        {/* ======================================================== */}
        {museumStep === "conclusion" && (
          <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-0.5 rounded-full uppercase tracking-widest font-mono font-bold">
                HÀNH TRÌNH HOÀN THÀNH
              </span>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Lịch Sử Không Chỉ Là Quá Khứ
              </h1>
              <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
                Mỗi trang sử hào hùng của Đảng là một bài học vô giá, là bệ
                phóng vững chắc để Gen Z tự tin bước vào kỷ nguyên số.
              </p>
            </div>

            {/* Các hộp ghi nhớ kịch bản tổng kết theo Vector Icons */}
            <div className="space-y-4">
              {[
                {
                  icon: <BookOpen className="w-4 h-4 text-blue-400" />,
                  title: "Bài học kinh nghiệm từ lịch sử",
                  text: "Kiên định mục tiêu cách mạng độc lập dân tộc gắn liền với chủ nghĩa xã hội. Đoàn kết là sức mạnh tối cao và luôn đổi mới sáng tạo, lấy dân làm gốc.",
                },
                {
                  icon: <Users className="w-4 h-4 text-purple-400" />,
                  title: "Trách nhiệm của thế hệ Gen Z",
                  text: "Không ngừng học tập nâng cao trình độ, lan tỏa các giá trị tích cực của dân tộc trên không gian mạng và dấn thân cống hiến cho cộng đồng.",
                },
                {
                  icon: <Settings className="w-4 h-4 text-emerald-400" />,
                  title: "Đổi mới sáng tạo & Chuyển đổi số",
                  text: "Ứng dụng công nghệ giải quyết các bài toán kinh tế xã hội thông minh, đưa Việt Nam vươn xa trên bản đồ tri thức toàn cầu.",
                },
                {
                  icon: <Rocket className="w-4 h-4 text-rose-400" />,
                  title: "Tầm nhìn tương lai Việt Nam",
                  text: "Hướng tới mốc năm 2030 và năm 2045, quốc gia số toàn diện: Xã hội số phồn vinh, kinh tế số vững mạnh và chính phủ số minh bạch.",
                },
              ].map((box, idx) => (
                <div
                  key={idx}
                  className="bg-[#121824] border border-gray-800/80 p-5 rounded-xl flex items-start space-x-4"
                >
                  <div className="w-9 h-9 bg-[#161D2D] border border-gray-800 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    {box.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-black text-gray-200 uppercase tracking-wide">
                      {box.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                      {box.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Thanh điều hướng chân mạng kết thúc */}
            <div className="pt-6 border-t border-gray-800/60 flex justify-between items-center">
              <button
                onClick={() => {
                  setMuseumStep("overview");
                  setActiveHallId(1);
                }}
                className="text-gray-500 hover:text-gray-300 text-xs font-bold uppercase tracking-wider transition flex items-center space-x-1.5"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Về trang chủ bảo tàng</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 border border-blue-500 text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg shadow-lg shadow-blue-500/10 transition flex items-center space-x-2"
              >
                <Award className="w-4 h-4 text-white-400" />
                <span>Nhận chứng nhận Digital</span>
              </button>
            </div>
          </main>
        )}
      </div>
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
