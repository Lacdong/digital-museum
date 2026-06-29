export const mindmapNodes = [
  // HẠT NHÂN TRUNG TÂM
  { id: "root", label: "Đảng Cộng Sản VN", group: "hub", x: 300, y: 200, desc: "Hạt nhân vĩ mô lãnh đạo toàn diện mọi thắng lợi của Cách mạng và công cuộc số hóa quốc gia." },
  
  // ========================================================
  // PHÒNG 1 (Giai đoạn 1930 - 1945) - Góc Trên Bên Trái
  // ========================================================
  { id: "hall-1", label: "Hall 1: Khát Vọng Độc Lập", group: "era", x: 160, y: 100, desc: "Thời kỳ tìm đường cứu nước, thành lập Đảng và các phong trào tiền đề tự do." },
  { id: "hcm", label: "Chủ tịch Hồ Chí Minh", group: "figure", x: 70, y: 60, desc: "Người sáng lập Đảng Cộng sản Việt Nam, bôn ba tìm con đường giải phóng cho dân tộc." },
  { id: "luan-cuong", label: "Luận cương 1930", group: "relic", x: 210, y: 50, desc: "Văn kiện chính trị nền tảng định hình tư duy chiến lược đầu tiên của Đảng do Tổng bí thư Trần Phú khởi thảo." },
  { id: "nharong", label: "Bến Nhà Rồng", group: "relic", x: 70, y: 130, desc: "Điểm xuất phát hành trình tìm đường cứu nước vĩ đại năm 1911." },

  // ========================================================
  // PHÒNG 2 & 3 (Giai đoạn 1945 - 1975) - Góc Dưới Bên Trái
  // ========================================================
  { id: "hall-23", label: "Hall 2 & 3: Kháng Chiến Trường Kỳ", group: "era", x: 150, y: 270, desc: "Giai đoạn Cách mạng Tháng Tám 1945 giành chính quyền và 2 cuộc kháng chiến chống Pháp, Mỹ." },
  { id: "tuyen-ngon", label: "Tuyên ngôn Độc lập", group: "relic", x: 50, y: 220, desc: "Văn kiện bất hủ khai sinh ra nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945." },
  { id: "vng", label: "Đại tướng Võ Nguyên Giáp", group: "figure", x: 60, y: 330, desc: "Vị Đại tướng huyền thoại, người Anh cả của Quân đội Nhân dân Việt Nam." },
  { id: "dbp", label: "Điện Biên Phủ 1954", group: "event", x: 190, y: 360, desc: "Chiến thắng lừng lẫy năm châu, chấn động địa cầu, bẻ gãy xích xiềng thực dân Pháp." },
  { id: "xetang390", label: "Xe tăng 390", group: "relic", x: 270, y: 340, desc: "Hiện vật lịch sử húc đổ cổng Dinh Độc Lập trưa ngày 30/04/1975, áp đảo hoàn toàn ngụy quyền." },

  // ========================================================
  // PHÒNG 4 (Giai đoạn 1975 - 2010) - Góc Dưới Bên Phải
  // ========================================================
  { id: "hall-4", label: "Hall 4: Kỷ Nguyên Đổi Mới", group: "era", x: 440, y: 290, desc: "Thời kỳ đổi mới kinh tế xã hội, phá bỏ rào cản bao cấp và bắt đầu hội nhập quốc tế." },
  { id: "nvlinh", label: "Tổng BT Nguyễn Văn Linh", group: "figure", x: 540, y: 340, desc: "Người khơi nguồn luồng gió Đổi Mới tại Đại hội VI với những tư duy kinh tế đột phá." },
  { id: "daihoi6", label: "Đại Hội VI (1986)", group: "event", x: 410, y: 370, desc: "Bước ngoặt lịch sử quyết định chuyển dịch sang nền kinh tế thị trường định hướng XHCN." },
  { id: "wto", label: "Gia nhập WTO (2007)", group: "event", x: 530, y: 250, desc: "Cổng kết nối đưa kinh tế Việt Nam chính thức bước vào sân chơi thương mại toàn cầu với tư cách thành viên thứ 150." },

  // ========================================================
  // PHÒNG 5 (Giai đoạn 2010 - NAY) - Góc Trên Bên Phải
  // ========================================================
  { id: "hall-5", label: "Hall 5: Kỷ Nguyên Số Hoá", group: "era", x: 450, y: 120, desc: "Thời kỳ làm chủ không gian mạng, ứng dụng trí tuệ nhân tạo và chuyển đổi số toàn diện quốc gia." },
  { id: "genz-node", label: "Thế hệ Gen Z", group: "figure", x: 550, y: 70, desc: "Lực lượng nòng cốt làm chủ tri thức khoa học và công nghệ, xung kích trên mặt trận số." },
  { id: "cdds", label: "Chuyển đổi số Quốc gia", group: "event", x: 370, y: 60, desc: "Chiến lược vĩ mô phát triển đồng bộ Chính phủ số, Kinh tế số và Xã hội số." },
  { id: "ai-era", label: "Hạ tầng AI nội địa 2026", group: "relic", x: 540, y: 160, desc: "Mốc thời gian khẳng định chủ quyền tri thức số, ứng dụng các mô hình ngôn ngữ lớn bản địa." }
];

export const mindmapLinks = [
  // Liên kết lõi từ hạt nhân ra 4 góc phòng lớn
  { source: "root", target: "hall-1" },
  { source: "root", target: "hall-23" },
  { source: "root", target: "hall-4" },
  { source: "root", target: "hall-5" },

  // Các liên kết vi mô bên trong Phòng 1
  { source: "hall-1", target: "hcm" },
  { source: "hall-1", target: "luan-cuong" },
  { source: "hall-1", target: "nharong" },
  { source: "hcm", target: "nharong" },

  // Các liên kết vi mô bên trong Phòng 2 & 3
  { source: "hall-23", target: "tuyen-ngon" },
  { source: "hall-23", target: "vng" },
  { source: "hall-23", target: "dbp" },
  { source: "vng", target: "dbp" },
  { source: "hall-23", target: "xetang390" },
  { source: "hcm", target: "vng" }, // Dây liên phòng: Bác Hồ bổ nhiệm Đại tướng

  // Các liên kết vi mô bên trong Phòng 4
  { source: "hall-4", target: "nvlinh" },
  { source: "hall-4", target: "daihoi6" },
  { source: "hall-4", target: "wto" },
  { source: "nvlinh", target: "daihoi6" },

  // Các liên kết vi mô bên trong Phòng 5
  { source: "hall-5", target: "genz-node" },
  { source: "hall-5", target: "cdds" },
  { source: "hall-5", target: "ai-era" },
  { source: "cdds", target: "genz-node" },
  { source: "ai-era", target: "genz-node" }
];