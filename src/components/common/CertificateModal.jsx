import { useState, useRef } from "react";
import { X, Award, User, Download, Sparkles, FileCheck } from "lucide-react";
// Import bộ thư viện kết xuất PDF chuẩn quốc tế
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function CertificateModal({ isOpen, onClose }) {
  const [visitorName, setVisitorName] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Khởi tạo ref trỏ thẳng vào phôi bằng khen để chụp ảnh xuất PDF
  const certificateRef = useRef(null);

  if (!isOpen) return null;

  const handleConfirmName = (e) => {
    e.preventDefault();
    if (visitorName.trim().length >= 2) {
      setIsGenerated(true);
    }
  };

  // Thuật toán chụp ảnh Canvas và đóng gói thành file PDF khổ A4 nằm ngang
  const handleDownloadPDF = () => {
    if (isDownloading) return;
    setIsDownloading(true);

    const input = certificateRef.current;

    // Tiến hành render khối HTML sang Canvas chất lượng cao (scale: 2)
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Khởi tạo file PDF khổ A4 nằm ngang (landscape)
        const pdf = new jsPDF("landscape", "mm", "a4");
        const pdfWidth = 297; // Kích thước chiều ngang chuẩn A4 (mm)
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Chèn ảnh vào trang PDF và lưu file
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Chung-Nhan-Digital-${visitorName.replace(/\s+/g, "-")}.pdf`);

        setIsDownloading(false);
        alert(
          `Hệ thống đã xuất bản và tải xuống file PDF chứng chỉ thành công!`,
        );
      })
      .catch((err) => {
        console.error("PDF Render Error: ", err);
        setIsDownloading(false);
      });
  };

  const handleCloseAndReset = () => {
    setVisitorName("");
    setIsGenerated(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-calligraphy {
          font-family: 'Great Vibes', cursive !important;
        }
      `,
        }}
      />
      <div className="bg-[#121824] border border-gray-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col justify-between">
        <button
          onClick={handleCloseAndReset}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition p-1 hover:bg-gray-800/50 rounded-lg z-30"
        >
          <X className="w-4 h-4" />
        </button>

        {/* MÀN HÌNH BƯỚC 1: NHẬP TÊN DANH TÍNH */}
        {!isGenerated ? (
          <form onSubmit={handleConfirmName} className="p-6 md:p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black uppercase tracking-wider text-gray-100">
                  Cấp Phát Chứng Nhận Số
                </h2>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold mt-0.5 text-blue-400">
                  Verification Protocol
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide block">
                Hãy cho chúng tôi biết danh tính của bạn, vị khách tham quan
                dòng lịch sử:
              </label>

              <div className="relative flex items-center bg-[#161D2D] border border-gray-800 focus-within:border-blue-500 rounded-xl px-3.5 py-1 transition">
                <User className="w-4 h-4 text-gray-600 shrink-0" />
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Nhập họ và tên của bạn..."
                  className="w-full bg-transparent px-3 py-2 text-xs text-gray-200 outline-none placeholder-gray-600 font-medium"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={visitorName.trim().length < 2}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition shadow-lg flex items-center justify-center space-x-2 disabled:bg-gray-800 disabled:text-gray-600"
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Xác nhận danh tính</span>
              </button>
            </div>
          </form>
        ) : (
          /* ======================================================== */
          /* MÀN HÌNH BƯỚC 2: PHÔI CHỨNG CHỈ KHỔ NGANG GIỐNG 100% ẢNH MẪU */
          /* ======================================================== */
          <div className="p-6 md:p-8 space-y-6 flex flex-col items-center">
            {/* VÙNG CHỤP CHỨNG CHỈ (Bọc container cố định tỷ lệ landscape) */}
            <div
              ref={certificateRef}
              className="w-[620px] h-[420px] bg-white text-slate-800 flex overflow-hidden relative select-none shadow-inner border border-slate-200 font-serif shrink-0"
            >
              {/* KHỐI TRÁI: KHU VỰC CHỮ VÀ NỘI DUNG CHÍNH */}
              <div className="flex-1 p-8 flex flex-col justify-between relative">
                <div className="space-y-0.5">
                  <h2 className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                    CHỨNG NHẬN
                  </h2>
                  <p className="text-[10px] text-slate-500 font-sans font-bold tracking-widest uppercase">
                    BẢO TÀNG SỐ
                  </p>
                </div>

                <div className="space-y-2 mt-2">
                  <p className="text-[11px] text-slate-500 italic font-sans">
                    CHÚC MỪNG ĐỒNG CHÍ
                  </p>
                  <h3 className="text-2xl font-bold text-blue-900 tracking-wide uppercase border-b border-slate-300 pb-1 font-serif">
                    {visitorName}
                  </h3>
                  <p className="text-[10px] text-slate-600 leading-relaxed font-sans max-w-md pt-1">
                    Đã xuất sắc hoàn thành chuỗi số hóa tư liệu ký ức và lật mở
                    thành công bí mật lịch sử tại hệ thống 5 Phòng Triển Lãm Đa
                    Phương Tiện của Trạm Bảo tàng số Việt Nam.
                  </p>
                </div>

                <div className="space-y-3"></div>

                {/* CON DẤU VÀNG KIM (Gold Badge) */}
                <div className="absolute right-6 top-6 w-14 h-14 rounded-full border-4 border-amber-400/40 bg-amber-50 flex flex-col items-center justify-center text-center shadow-md rotate-12">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-[7px] font-sans font-black text-amber-600 tracking-tighter uppercase mt-0.5">
                    VIETNAM
                  </span>
                  <span className="text-[6px] font-sans font-bold text-amber-500 uppercase tracking-tighter">
                    Đảng Cộng Sản
                  </span>
                </div>

                {/* KHU VỰC CHỮ KÝ TAY (Signatures) */}
                <div className="absolute right-6 bottom-8 flex space-x-6 text-center">
                  <div className="space-y-0.5">
                    <span className="font-calligraphy text-xs italic text-slate-500 block h-4 font-medium">
                      Digital.Museum
                    </span>
                    <div className="w-16 h-px bg-slate-300 mx-auto"></div>
                    <span className="text-[8px] text-slate-400 font-sans block">
                      Đại diện Bảo tàng số Việt Nam
                    </span>
                  </div>
                </div>
              </div>

              {/* KHỐI PHẢI: DẢI HOẠ TIẾT CARO XANH DƯƠNG - TRẮNG ĐỨNG ĐỘC QUYỀN */}
              <div className="w-16 h-full grid grid-cols-2 grid-rows-6 shrink-0 border-l border-slate-100">
                <div className="bg-blue-900"></div>
                <div className="bg-blue-500/20"></div>
                <div className="bg-white"></div>
                <div className="bg-blue-900"></div>
                <div className="bg-blue-950"></div>
                <div className="bg-white"></div>
                <div className="bg-blue-500/40"></div>
                <div className="bg-blue-900"></div>
                <div className="bg-blue-900"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-blue-950"></div>
              </div>
            </div>

            {/* NÚT ĐIỀU KHIỂN DOWNLOAD */}
            <div className="w-full max-w-md text-center space-y-3">
              <p className="text-gray-400 text-xs">
                Hệ thống lượng tử đã mã hóa hoàn tất thành tích của đồng chí{" "}
                <strong className="text-gray-200">{visitorName}</strong>!
              </p>

              <button
                type="button"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition disabled:bg-gray-800 disabled:text-gray-600"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {isDownloading
                    ? "Đang xuất file PDF..."
                    : "Tải xuống chứng nhận PDF"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
