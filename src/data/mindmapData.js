export const mindmapNodes = [
  // HẠT NHÂN TRUNG TÂM
  { id: "root", label: "Đảng Cộng Sản VN", group: "hub", x: 300, y: 200, desc: "Hạt nhân vĩ mô lãnh đạo toàn diện mọi thắng lợi của Cách mạng và công cuộc số hóa quốc gia." },
  
  // ========================================================
  // PHÒNG 1 (Giai đoạn trước 1930 - 1945) - Góc Trên Bên Trái
  // ========================================================
  { id: "hall-1", label: "Hall 1: Khát Vọng Độc Lập", group: "era", x: 160, y: 100, desc: "Thời kỳ tìm đường cứu nước, thành lập Đảng và các phong trào tiền đề giải phóng dân tộc[cite: 1]." },
  { id: "hcm", label: "Chủ tịch Hồ Chí Minh", group: "figure", x: 70, y: 60, desc: "Người sáng lập Đảng Cộng sản Việt Nam, bôn ba tìm con đường giải phóng cho dân tộc[cite: 1]." },
  { id: "tranphu", label: "Tổng BT Trần Phú", group: "figure", x: 70, y: 110, desc: "Tổng Bí thư đầu tiên của Đảng, người khởi thảo bản Luận cương chính trị tháng 10/1930[cite: 1]." },
  { id: "hvncmtn", label: "Hội VN Cách mạng Thanh niên", group: "event", x: 120, y: 40, desc: "Tổ chức cách mạng tiền thân do Nguyễn Ái Quốc thành lập năm 1925 tại Quảng Châu[cite: 1]." },
  { id: "luan-cuong", label: "Luận cương chính trị 1930", group: "relic", x: 210, y: 50, desc: "Văn kiện xác định nhiệm vụ chiến lược cách mạng Đông Dương do Trần Phú khởi thảo[cite: 1]." },
  { id: "chanh-cuong", label: "Chánh cương, Sách lược vắn tắt", group: "relic", x: 230, y: 90, desc: "Cương lĩnh chính trị đầu tiên của Đảng do Nguyễn Ái Quốc soạn thảo thông qua đầu năm 1930[cite: 1]." },
  { id: "nharong", label: "Bến Nhà Rồng", group: "relic", x: 70, y: 160, desc: "Nơi người thanh niên yêu nước Nguyễn Tất Thành ra đi tìm đường cứu nước năm 1911." },

  // ========================================================
  // PHÒNG 2 (Cách mạng Tháng Tám & Chính quyền Nhân dân) - Giữa Bên Trái
  // ========================================================
  { id: "hall-2", label: "Hall 2: Cách Mạng Tháng 8", group: "era", x: 130, y: 210, desc: "Thời kỳ Tổng khởi nghĩa giành chính quyền về tay nhân dân, đập tan xiềng xích thực dân phong kiến[cite: 1]." },
  { id: "truong-chinh", label: "Đồng chí Trường Chinh", group: "figure", x: 40, y: 215, desc: "Tổng Bí thư chỉ đạo chiến thuật Cách mạng Tháng Tám, nhà lý luận kiệt xuất[cite: 1]." },
  { id: "de-cuong-vh", label: "Đề cương Văn hóa 1943", group: "relic", x: 100, y: 155, desc: "Bản đề cương đặt nền móng xây dựng nền văn hóa cách mạng Việt Nam[cite: 1]." },
  { id: "tuyen-ngon", label: "Tuyên ngôn Độc lập", group: "relic", x: 40, y: 170, desc: "Áng văn lập quốc vĩ đại khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945[cite: 1]." },
  { id: "dinh-tan-trao", label: "Đình Tân Trào", group: "relic", x: 40, y: 260, desc: "Nơi diễn ra Đại hội Quốc dân quyết định lệnh Tổng khởi nghĩa trên toàn quốc[cite: 1]." },

  // ========================================================
  // PHÒNG 3 (Kháng chiến trường kỳ & Thống nhất) - Góc Dưới Bên Trái
  // ========================================================
  { id: "hall-3", label: "Hall 3: Kháng Chiến & Thống Nhất", group: "era", x: 160, y: 310, desc: "Chặng đường 30 năm kiên cường đấu tranh đánh bại Pháp và Mỹ, thống nhất đất nước[cite: 1]." },
  { id: "vng", label: "Đại tướng Võ Nguyên Giáp", group: "figure", x: 60, y: 310, desc: "Vị Đại tướng huyền thoại, người Anh cả của Quân đội Nhân dân Việt Nam[cite: 1]." },
  { id: "leduan", label: "Tổng BT Lê Duẩn", group: "figure", x: 60, y: 360, desc: "Tổng Bí thư vạch ra Đề cương cách mạng miền Nam, chèo lái kháng chiến chống Mỹ[cite: 1]." },
  { id: "loi-keu-goi", label: "Lời kêu gọi Toàn quốc kháng chiến", group: "relic", x: 100, y: 270, desc: "Hịch văn cứu nước hào hùng của Chủ tịch Hồ Chí Minh phát động mùa đông năm 1946[cite: 1]." },
  { id: "dbp", label: "Điện Biên Phủ 1954", group: "event", x: 200, y: 360, desc: "Chiến thắng lừng lẫy năm châu, bẻ gãy ý chí xâm lược của thực dân Pháp[cite: 1]." },
  { id: "hiep-dinh-geneve", label: "Hiệp định Genève 1954", group: "relic", x: 120, y: 380, desc: "Hiệp định quốc tế chấm dứt chiến tranh, lập lại hòa bình tại Đông Dương[cite: 1]." },
  { id: "hiep-dinh-paris", label: "Hiệp định Paris 1973", group: "relic", x: 250, y: 380, desc: "Hiệp định buộc quân đội Mỹ rút hoàn toàn khỏi miền Nam Việt Nam[cite: 1]." },
  { id: "xetang390", label: "Xe tăng 390", group: "relic", x: 270, y: 320, desc: "Hiện vật húc đổ cổng Dinh Độc Lập trưa ngày 30/04/1975, kết thúc thắng lợi cuộc kháng chiến[cite: 1]." },

  // ========================================================
  // PHÒNG 4 (Giai đoạn 1975 - 2010) - Góc Dưới Bên Phải
  // ========================================================
  { id: "hall-4", label: "Hall 4: Kỷ Nguyên Đổi Mới", group: "era", x: 440, y: 290, desc: "Thời kỳ đổi mới kinh tế xã hội, xóa bỏ bao cấp và hội nhập quốc tế sâu rộng[cite: 1]." },
  { id: "nvlinh", label: "Tổng BT Nguyễn Văn Linh", group: "figure", x: 540, y: 340, desc: "Người khơi nguồn luồng gió Đổi Mới tại Đại hội VI với những tư duy kinh tế đột phá[cite: 1]." },
  { id: "kimngoc", label: "Bí thư Kim Ngọc", group: "figure", x: 560, y: 290, desc: "Cha đẻ của 'Khoán hộ', tạo tiền đề thực tiễn định hình chính sách đổi mới nông nghiệp." },
  { id: "daihoi6", label: "Đại Hội VI (1986)", group: "event", x: 410, y: 370, desc: "Bước ngoặt lịch sử quyết định chuyển dịch sang nền kinh tế thị trường định hướng XHCN[cite: 1]." },
  { id: "cuong-linh-1991", label: "Cương lĩnh 1991", group: "relic", x: 480, y: 370, desc: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội[cite: 1]." },
  { id: "wto", label: "Gia nhập WTO (2007)", group: "event", x: 530, y: 240, desc: "Việt Nam chính thức bước vào sân chơi thương mại toàn cầu với tư cách thành viên thứ 150[cite: 1]." },

  // ========================================================
  // PHÒNG 5 (Giai đoạn 2010 - NAY) - Góc Trên Bên Phải
  // ========================================================
  { id: "hall-5", label: "Hall 5: Kỷ Nguyên Số Hoá", group: "era", x: 450, y: 120, desc: "Thời kỳ làm chủ công nghệ cao, chuyển đổi số toàn diện và đưa đất nước phát triển phồn vinh[cite: 1]." },
  { id: "nptrong", label: "Tổng BT Nguyễn Phú Trọng", group: "figure", x: 550, y: 130, desc: "Nhà lãnh đạo kiệt xuất chỉ đạo công cuộc chỉnh đốn Đảng, xây dựng hệ thống chính trị trong sạch[cite: 1]." },
  { id: "tolam", label: "Tổng BT Tô Lâm", group: "figure", x: 550, y: 180, desc: "Nhà lãnh đạo đẩy mạnh tinh gọn bộ máy, số hóa toàn diện thủ tục hành chính quốc gia[cite: 1]." },
  { id: "genz-node", label: "Thế hệ Gen Z", group: "figure", x: 560, y: 70, desc: "Lực lượng nòng cốt làm chủ tri thức khoa học và công nghệ trên mặt trận số[cite: 1]." },
  { id: "cdds", label: "Chuyển đổi số Quốc gia", group: "event", x: 370, y: 50, desc: "Chiến lược quốc gia đồng bộ xây dựng Chính phủ số, Kinh tế số và Xã hội số[cite: 1]." },
  { id: "nq-52", label: "Nghị quyết 52-NQ/TW", group: "relic", x: 370, y: 100, desc: "Chủ trương của Bộ Chính trị về việc chủ động tham gia cuộc Cách mạng công nghiệp lần thứ tư[cite: 1]." },
  { id: "nic-node", label: "Trung tâm NIC", group: "relic", x: 460, y: 30, desc: "Trung tâm Đổi mới sáng tạo Quốc gia, hạt nhân thúc đẩy các giải pháp công nghệ số." },
  { id: "ai-era", label: "Hạ tầng AI nội địa 2026", group: "relic", x: 510, y: 30, desc: "Khẳng định chủ quyền số quốc gia, tự chủ phát triển các mô hình trí tuệ nhân tạo bản địa[cite: 1]." }
];

export const mindmapLinks = [
  // Liên kết lõi từ hạt nhân ra 5 phòng lớn
  { source: "root", target: "hall-1" },
  { source: "root", target: "hall-2" },
  { source: "root", target: "hall-3" },
  { source: "root", target: "hall-4" },
  { source: "root", target: "hall-5" },

  // Các liên kết vi mô bên trong Phòng 1
  { source: "hall-1", target: "hcm" },
  { source: "hall-1", target: "tranphu" },
  { source: "hall-1", target: "hvncmtn" },
  { source: "hall-1", target: "luan-cuong" },
  { source: "hall-1", target: "chanh-cuong" },
  { source: "hall-1", target: "nharong" },
  { source: "hcm", target: "nharong" },
  { source: "hcm", target: "hvncmtn" },
  { source: "tranphu", target: "luan-cuong" },

  // Các liên kết vi mô bên trong Phòng 2
  { source: "hall-2", target: "truong-chinh" },
  { source: "hall-2", target: "tuyen-ngon" },
  { source: "hall-2", target: "de-cuong-vh" },
  { source: "hall-2", target: "dinh-tan-trao" },
  { source: "hcm", target: "tuyen-ngon" },
  { source: "truong-chinh", target: "de-cuong-vh" },

  // Các liên kết vi mô bên trong Phòng 3
  { source: "hall-3", target: "vng" },
  { source: "hall-3", target: "leduan" },
  { source: "hall-3", target: "loi-keu-goi" },
  { source: "hall-3", target: "dbp" },
  { source: "hall-3", target: "hiep-dinh-geneve" },
  { source: "hall-3", target: "hiep-dinh-paris" },
  { source: "hall-3", target: "xetang390" },
  { source: "vng", target: "dbp" },
  { source: "dbp", target: "hiep-dinh-geneve" },
  { source: "hcm", target: "vng" }, // Dây liên phòng: Bác Hồ bổ nhiệm Đại tướng

  // Các liên kết vi mô bên trong Phòng 4
  { source: "hall-4", target: "nvlinh" },
  { source: "hall-4", target: "kimngoc" },
  { source: "hall-4", target: "daihoi6" },
  { source: "hall-4", target: "cuong-linh-1991" },
  { source: "hall-4", target: "wto" },
  { source: "nvlinh", target: "daihoi6" },
  { source: "kimngoc", target: "daihoi6" },

  // Các liên kết vi mô bên trong Phòng 5
  { source: "hall-5", target: "nptrong" },
  { source: "hall-5", target: "tolam" },
  { source: "hall-5", target: "genz-node" },
  { source: "hall-5", target: "cdds" },
  { source: "hall-5", target: "nq-52" },
  { source: "hall-5", target: "nic-node" },
  { source: "hall-5", target: "ai-era" },
  { source: "cdds", target: "genz-node" },
  { source: "ai-era", target: "genz-node" },
  { source: "nic-node", target: "ai-era" }
];