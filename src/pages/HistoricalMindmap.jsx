import { useState, useMemo, useRef, useEffect } from "react";
import Footer from "../components/layout/Footer";
import FallingStars from "../components/common/FallingStars";
import { mindmapNodes, mindmapLinks } from "../data/mindmapData";
import {
  Network,
  Search,
  Layers,
  ChevronRight,
  Info,
  Activity,
  Sparkles,
  HelpCircle,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

export default function HistoricalMindmap() {
  const [selectedNodeId, setSelectedNodeId] = useState("root");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Cấu hình trạng thái Zoom & Pan
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);

  // 💡 THUẬT TOÁN TỰ ĐỘNG GIÃN RỘNG TOÀN BỘ HỆ TỌA ĐỘ (Đồng bộ tuyệt đối nút & dây)
  const scaledNodes = useMemo(() => {
    const centerX = 300; // Tâm cũ
    const centerY = 200; // Tâm cũ
    const scaleX = 1.75; // Giãn rộng chiều ngang để tránh đè chữ
    const scaleY = 1.6; // Giãn rộng chiều dọc

    const targetCenterX = 400; // Tâm mới trên khung canvas 800x600
    const targetCenterY = 300; // Tâm mới trên khung canvas 800x600

    return mindmapNodes.map((node) => ({
      ...node,
      x: (node.x - centerX) * scaleX + targetCenterX,
      y: (node.y - centerY) * scaleY + targetCenterY,
    }));
  }, []);

  // Đọc thông tin nút đang chọn từ danh sách đã giãn tọa độ
  const activeNode = useMemo(() => {
    return scaledNodes.find((n) => n.id === selectedNodeId) || scaledNodes[0];
  }, [selectedNodeId, scaledNodes]);

  // Bộ lọc danh mục và từ khóa tìm kiếm
  const filteredNodes = useMemo(() => {
    return scaledNodes.filter((node) => {
      const matchCat =
        categoryFilter === "all" || node.group === categoryFilter;
      const matchSearch = node.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [categoryFilter, searchQuery, scaledNodes]);

  // Kết xuất các đường nối dây vector (sử dụng danh sách scaledNodes mới)
  const renderedLinks = useMemo(() => {
    return mindmapLinks
      .map((link, idx) => {
        const sourceNode = scaledNodes.find((n) => n.id === link.source);
        const targetNode = scaledNodes.find((n) => n.id === link.target);

        if (!sourceNode || !targetNode) return null;

        const isHighlighted =
          link.source === selectedNodeId || link.target === selectedNodeId;

        return (
          <line
            key={`link-${idx}`}
            x1={sourceNode.x}
            y1={sourceNode.y}
            x2={targetNode.x}
            y2={targetNode.y}
            stroke={isHighlighted ? "#3b82f6" : "#1e293b"}
            strokeWidth={isHighlighted ? "2" : "1"}
            className={`transition-all duration-300 ${
              isHighlighted ? "active-connection" : ""
            }`}
            strokeDasharray={isHighlighted ? "none" : "2, 3"}
          />
        );
      })
      .filter(Boolean);
  }, [selectedNodeId, scaledNodes]);

  // Chặn cuộn trang của trình duyệt để zoom mượt mà trong khung bản đồ
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const scaleFactor = 0.08;
      setZoom((prev) => {
        const nextZoom = prev + (e.deltaY < 0 ? scaleFactor : -scaleFactor);
        return Math.max(0.6, Math.min(nextZoom, 2.0)); // Zoom từ 60% đến 200%
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Logic kéo thả di chuyển bản đồ (Drag & Pan)
  const handleMouseDown = (e) => {
    if (e.target.closest(".node-button") || e.target.closest(".control-bar"))
      return;

    setIsDragging(true);
    setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - startPan.x,
      y: e.clientY - startPan.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Nút điều hướng nhanh của Toolbar
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.15, 2.0));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.15, 0.6));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Phối màu cho các nhãn thực thể
  const getNodeColorClass = (group, isSelected) => {
    if (isSelected) {
      return "border-blue-500 text-white bg-blue-600/20 shadow-[0_0_15px_rgba(59,130,246,0.4)] ring-2 ring-blue-500/40 scale-[1.05] z-30";
    }
    switch (group) {
      case "hub":
        return "border-red-500/40 text-red-300 bg-red-950/15 hover:border-red-400 hover:bg-red-950/30";
      case "era":
        return "border-purple-500/40 text-purple-300 bg-purple-950/15 hover:border-purple-400 hover:bg-purple-950/30";
      case "figure":
        return "border-emerald-500/40 text-emerald-300 bg-emerald-950/15 hover:border-emerald-400 hover:bg-emerald-950/30";
      case "event":
        return "border-yellow-500/40 text-yellow-300 bg-yellow-950/15 hover:border-yellow-400 hover:bg-yellow-950/30";
      case "relic":
        return "border-cyan-500/40 text-cyan-300 bg-cyan-950/15 hover:border-cyan-400 hover:bg-cyan-950/30";
      default:
        return "border-gray-800 text-gray-400 bg-gray-900/40";
    }
  };

  const getDotColorClass = (group) => {
    switch (group) {
      case "hub":
        return "bg-red-500";
      case "era":
        return "bg-purple-500";
      case "figure":
        return "bg-emerald-500";
      case "event":
        return "bg-yellow-500";
      case "relic":
        return "bg-cyan-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-[#070B13] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 items-stretch">
            {/* 🟦 CỘT TRÁI (3/12): BỘ LỌC CẤU TRÚC */}
            <section className="lg:col-span-3 bg-[#0F1420]/60 border border-gray-800/80 p-4 rounded-2xl flex flex-col justify-between space-y-4 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h2 className="text-xs font-black uppercase tracking-widest text-gray-200 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Bộ lọc cấu trúc</span>
                  </h2>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    Lọc nhanh các thực thể trên bản đồ theo phân loại dữ liệu.
                  </p>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm nút ký ức..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#090D16] border border-gray-800/80 focus:border-blue-500/60 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-300 outline-none transition placeholder-gray-500"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block mb-1 px-1">
                    Nhãn thực thể
                  </span>
                  {[
                    { id: "all", label: "Tất cả nút số", color: "bg-gray-400" },
                    {
                      id: "hub",
                      label: "Hạt nhân trung tâm",
                      color: "bg-red-500",
                    },
                    {
                      id: "era",
                      label: "Phòng triển lãm",
                      color: "bg-purple-500",
                    },
                    {
                      id: "figure",
                      label: "Nhân vật lịch sử",
                      color: "bg-emerald-500",
                    },
                    {
                      id: "event",
                      label: "Sự kiện cốt lõi",
                      color: "bg-yellow-500",
                    },
                    {
                      id: "relic",
                      label: "Tư liệu & hiện vật",
                      color: "bg-cyan-500",
                    },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategoryFilter(cat.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-[11px] font-bold border transition ${
                        categoryFilter === cat.id
                          ? "bg-blue-950/40 border-blue-500/40 text-blue-400"
                          : "bg-transparent border-transparent text-gray-400 hover:bg-[#121824]/50 hover:text-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${cat.color}`}
                        ></span>
                        <span>{cat.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-3 h-3 text-gray-600 transition-transform ${categoryFilter === cat.id ? "translate-x-0.5 text-blue-500" : ""}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#121723]/60 border border-gray-800 p-3 rounded-xl space-y-1">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">
                  Trạng thái cấu trúc
                </span>
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span>Graph Engine v2.5</span>
                  </span>
                  <span className="text-emerald-400 font-bold">SECURE</span>
                </div>
              </div>
            </section>

            {/* 🟩 CỘT GIỮA (6/12): KHÔNG GIAN ĐỒ THỊ MẠNG NHỆN */}
            <section className="lg:col-span-6 bg-[#0B0F19] border border-gray-800 rounded-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[520px] max-h-[550px]">
              {/* Header của Bản đồ */}
              <div className="p-4 border-b border-gray-800/60 bg-[#0E1320]/80 backdrop-blur flex items-center justify-between relative z-20">
                <div className="flex items-center space-x-2">
                  <Network className="w-4 h-4 text-blue-400" />
                  <h2 className="text-xs font-black text-gray-200 uppercase tracking-wide">
                    Sơ đồ tư duy liên kết lịch sử
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-950/40 border border-blue-800/40 px-1.5 py-0.5 rounded">
                    Tỷ lệ: {Math.round(zoom * 100)}%
                  </span>
                </div>
              </div>

              {/* 💡 CONTAINER KHÔNG GIAN BẢN ĐỒ VÀ KÉO THẢ */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`flex-1 w-full relative bg-[#060A12] overflow-hidden select-none transition-colors ${
                  isDragging ? "cursor-grabbing bg-[#080D18]" : "cursor-grab"
                }`}
              >
                {/* 💡 BẢN ĐỒ PHẲNG 800x600 (Được dịch chuyển và co giãn thông qua wrapper này) */}
                <div
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: "center center",
                    width: "800px",
                    height: "600px",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-75 ease-out"
                >
                  {/* Lớp SVG nền cho lưới và đường kết nối */}
                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    <defs>
                      <pattern
                        id="dot-grid"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1.5" cy="1.5" r="1" fill="#1E293B" />
                      </pattern>
                    </defs>
                    {/* Vẽ lưới họa tiết hạt tinh thể */}
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />
                    {renderedLinks}
                  </svg>

                  {/* Lớp các nút bấm (Vị trí x, y khớp chuẩn 100% với đường vẽ SVG) */}
                  <div className="absolute inset-0 z-10">
                    {filteredNodes.map((node) => {
                      const isSelected = node.id === selectedNodeId;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          style={{ left: `${node.x}px`, top: `${node.y}px` }}
                          className={`node-button absolute px-2.5 py-1.5 rounded-lg border text-[10px] font-bold tracking-wide transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1.5 whitespace-nowrap ${getNodeColorClass(
                            node.group,
                            isSelected,
                          )}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${getDotColorClass(
                              node.group,
                            )} ${isSelected ? "animate-ping" : ""}`}
                          ></span>
                          <span>{node.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 💡 CHÚ GIẢI THỰC THỂ (LEGEND) TRONG BẢN ĐỒ */}
                <div className="absolute bottom-3 left-3 z-20 bg-[#0A0E17]/80 border border-gray-800/80 p-2 rounded-lg backdrop-blur-sm hidden sm:grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>Hạt nhân</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <span>Phòng trưng bày</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Nhân vật</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    <span>Sự kiện</span>
                  </div>
                  <div className="flex items-center space-x-1.5 col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span>Hiện vật / Văn kiện</span>
                  </div>
                </div>

                {/* 💡 TOOLBAR ĐIỀU KHIỂN ĐỒ HỌA NHANH */}
                <div className="control-bar absolute bottom-3 right-3 z-20 flex flex-col space-y-1 bg-[#0A0E17]/80 border border-gray-800 p-1.5 rounded-xl backdrop-blur-sm">
                  <button
                    onClick={handleZoomIn}
                    title="Phóng to"
                    className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    title="Thu nhỏ"
                    className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <div className="h-px bg-gray-800 my-0.5" />
                  <button
                    onClick={handleReset}
                    title="Đặt lại góc nhìn"
                    className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chân bản đồ */}
              <div className="p-3 border-t border-gray-800/60 bg-[#0E1320]/80 backdrop-blur flex justify-between items-center text-[10px] text-gray-400 font-mono relative z-20">
                <span className="hidden sm:inline">
                  Lăn chuột để Zoom • Giữ chuột kéo để Di chuyển sơ đồ
                </span>
                <span className="sm:hidden">
                  Dùng Toolbar ở góc phải để Zoom/Reset
                </span>
                <span className="flex items-center space-x-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Đồng bộ hóa mạng</span>
                </span>
              </div>
            </section>

            {/* 🟨 CỘT PHẢI (3/12): BẢNG THANH TRA CHI TIẾT */}
            <section className="lg:col-span-3 bg-[#0F1420]/60 border border-gray-800 p-5 rounded-2xl flex flex-col justify-between min-h-[500px] backdrop-blur-sm">
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex justify-center mb-1">
                  <div className="p-2.5 bg-blue-950/30 rounded-full border border-blue-900/30 text-blue-400">
                    <Info className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <span className="text-[8px] font-black px-2 py-0.5 rounded border mx-auto block w-max uppercase font-mono tracking-widest border-blue-500/20 text-blue-400 bg-blue-500/5">
                    {activeNode.group.toUpperCase()}
                  </span>
                  <h2 className="text-sm font-black text-gray-100 uppercase tracking-wide leading-tight">
                    {activeNode.label}
                  </h2>
                </div>

                <div className="text-left space-y-2 pt-4 border-t border-gray-800/60">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest block">
                    Thông tin tư liệu
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                    {activeNode.desc}
                  </p>
                </div>

                <div className="bg-[#121723] border border-gray-800/40 p-3 rounded-xl text-left space-y-1.5">
                  <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                    <span>Mẹo nhỏ đồ thị</span>
                  </span>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    Nhấp chọn bất kỳ một nút nào trên màn hình để rọi sáng tất
                    cả các đường kết nối nghiệp quả đi/đến thực thể đó.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/60">
                <button
                  onClick={() =>
                    alert(
                      `Truy vấn lõi kho lưu trữ dữ liệu vĩ mô: ${activeNode.label}`,
                    )
                  }
                  className="w-full bg-[#070B13] hover:bg-blue-600 border border-gray-800 hover:border-blue-500 text-[10px] font-bold text-gray-300 hover:text-white py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Truy cập tài liệu gốc</span>
                </button>
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
        
        /* Hiệu ứng tỏa sáng lan truyền trên các kết nối đang active */
        @keyframes connectionFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .active-connection {
          animation: connectionFlow 1.2s linear infinite;
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.6));
        }
      `,
        }}
      />
    </div>
  );
}
