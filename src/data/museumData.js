export const museumHalls = [
  {
    id: 1,
    title: "HALL 1: SỰ RA ĐỜI CỦA ĐẢNG & KHÁT VỌNG ĐỘC LẬP",
    era: "TRƯỚC 1930 - 1945",
    desc: "Khám phá giai đoạn lịch sử hào hùng từ 1930 đến 1945, khi ánh sáng của chủ nghĩa Mác-Lênin soi rọi con đường cứu nước.",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    timeline: [
      { year: "1930", text: "Thành lập Đảng Cộng sản Việt Nam" },
      { year: "1930-1931", text: "Phong trào Xô Viết Nghệ Tĩnh bùng nổ" },
      { year: "1936-1939", text: "Vận động Dân chủ công khai" },
      { year: "1939-1945", text: "Cao trào Vận động Giải phóng dân tộc" },
      { year: "1945", text: "Cách mạng Tháng Tám giành thắng lợi" }
    ],
    relics: [
      { name: "Hội nghị Hương Cảng", desc: "Nơi hợp nhất các tổ chức, thành lập Đảng đầu năm 1930.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80" },
      { name: "Cờ đỏ sao vàng", desc: "Biểu tượng thiêng liêng xuất hiện trong Khởi nghĩa Nam Kỳ.", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=300&q=80" },
      { name: "Lán Nà Nưa", desc: "Nơi Bác Hồ ở và làm việc chuẩn bị cho Tổng khởi nghĩa.", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=300&q=80" }
    ],
    figures: [
      { name: "Hồ Chí Minh", role: "Lãnh tụ thiên tài", img: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=100&q=80", desc: "Người sáng lập Đảng Cộng sản Việt Nam, khai sinh ra nước VNDCCH." },
      { name: "Trần Phú", role: "Tổng Bí thư đầu tiên", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", desc: "Người khởi thảo bản Luận cương chính trị tháng 10/1930." },
      { name: "Võ Nguyên Giáp", role: "Đại tướng huyền thoại", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", desc: "Người Anh cả xây dựng Đội VN Tuyên truyền Giải phóng quân." }
    ],
    events: [
      { date: "03/02/1930", type: "Political", title: "Thống nhất các tổ chức Cộng sản", text: "Chấm dứt thời kỳ khủng hoảng về đường lối cứu nước kéo dài hàng thập kỷ." },
      { date: "1930 - 1931", type: "Political", title: "Chính quyền Xô Viết Nghệ Tĩnh", text: "Mô hình chính quyền kiểu mới đầu tiên của nhân dân lao động tại Việt Nam." },
      { date: "22/12/1944", type: "Military", title: "Thành lập Đội VN Tuyên truyền GPQ", text: "Tiền thân của Quân đội Nhân dân Việt Nam anh hùng." }
    ]
  },
  {
    id: 2,
    title: "HALL 2: CÁCH MẠNG THÁNG TÁM & CHÍNH QUYỀN NHÂN DÂN",
    xp: 500,
    level: "Dễ",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80",
    quote: "“Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.”",
    timeline: [
      { year: "16/08", text: "Đại hội Quốc dân Tân Trào quyết định Tổng khởi nghĩa" },
      { year: "19/08", text: "Khởi nghĩa giành thắng lợi hoàn toàn tại Hà Nội" },
      { year: "23/08", text: "Giành chính quyền tại Huế" },
      { year: "25/08", text: "Giành chính quyền tại Sài Gòn" },
      { year: "02/09", text: "Tuyên ngôn Độc lập tại Quảng trường Ba Đình" }
    ],
    relics: [
      { name: "Đình Tân Trào", desc: "Nơi diễn ra Đại hội Quốc dân quyết định vận mệnh dân tộc.", img: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=300&q=80" },
      { name: "Bản Tuyên ngôn gốc", desc: "Văn bản khai sinh nước Việt Nam Dân chủ Cộng hòa.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" }
    ],
    figures: [
      { name: "Hồ Chí Minh", role: "Chủ tịch nước", img: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=100&q=80", desc: "Người soạn thảo và đọc bản Tuyên ngôn Độc lập." },
      { name: "Trường Chinh", role: "Tổng Bí thư", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", desc: "Tổng công trình sư chỉ đạo chiến thuật Cách mạng Tháng Tám." }
    ],
    events: [
      { date: "19/08/1945", type: "Political", title: "Khởi nghĩa Hà Nội thắng lợi", text: "Tạo làn sóng cổ vũ mạnh mẽ thúc đẩy các tỉnh thành khác nổi dậy giành chính quyền." },
      { date: "02/09/1945", type: "Historical", title: "Khai sinh nước VNDCCH", text: "Mở ra một kỷ nguyên mới giải phóng dân tộc gắn liền với giải phóng giai cấp." }
    ]
  },
  {
    id: 3,
    title: "HALL 3: KHÁNG CHIẾN TRƯỜNG KỲ & THỐNG NHẤT ĐẤT NƯỚC",
    era: "1945 - 1975",
    desc: "Tái hiện hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ vĩ đại, kết thúc bằng thắng lợi hoàn toàn mùa Xuân 1975.",
    cover: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80",
    timeline: [
      { year: "1946", text: "Phát động Toàn quốc kháng chiến" },
      { year: "1950", text: "Chiến dịch Biên giới Thu Đông" },
      { year: "1954", text: "Chiến thắng Điện Biên Phủ lừng lẫy" },
      { year: "1968", text: "Tổng tiến công và nổi dậy Mậu Thân" },
      { year: "1975", text: "Chiến dịch Hồ Chí Minh giải phóng miền Nam" }
    ],
    relics: [
      { name: "Hầm De Castries", desc: "Nơi ghi dấu sự thất bại hoàn toàn của quân viễn chinh Pháp.", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=300&q=80" },
      { name: "Xe tăng 390", desc: "Húc đổ cổng Dinh Độc Lập trưa ngày 30/04/1975.", img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=300&q=80" }
    ],
    figures: [
      { name: "Võ Nguyên Giáp", role: "Đại tướng Tổng Tư lệnh", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", desc: "Vị tướng huyền thoại bẻ gãy các kế hoạch quân sự của thực dân Pháp và Mỹ." },
      { name: "Lê Duẩn", role: "Tổng Bí thư", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80", desc: "Người vạch ra Đề cương cách mạng miền Nam, dẫn dắt kháng chiến chống Mỹ." }
    ],
    events: [
      { date: "07/05/1954", type: "Military", title: "Chiến thắng Điện Biên Phủ", text: "Buộc Pháp phải ký hiệp định Giơ-nevơ rút quân về nước." },
      { date: "30/04/1975", type: "Military", title: "Giải phóng hoàn toàn miền Nam", text: "Non sông liền một dải, kết thúc 21 năm chia cắt đất nước." }
    ]
  },
  {
    id: 4,
    title: "HALL 4: KỶ NGUYÊN ĐỔI MỚI & HỘI NHẬP QUỐC TẾ",
    era: "1975 - 2010",
    desc: "Sự thay đổi tư duy lịch sử tại Đại hội VI (1986), mở cửa nền kinh tế và đưa Việt Nam thoát khỏi khủng hoảng vươn ra thế giới.",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    timeline: [
      { year: "1976", text: "Thống nhất đất nước về mặt Nhà nước" },
      { year: "1981", text: "Chỉ thị 100 về khoán sản phẩm nông nghiệp" },
      { year: "1986", text: "Đại hội VI khởi xướng đường lối Đổi mới" },
      { year: "1995", text: "Gia nhập ASEAN & Bình thường hóa quan hệ Việt - Mỹ" },
      { year: "2007", text: "Việt Nam chính thức gia nhập WTO" }
    ],
    relics: [
      { name: "Văn kiện Đại hội VI", desc: "Cẩm nang lịch sử chuyển đổi từ bao cấp sang kinh tế thị trường.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80" },
      { name: "Cột mốc WTO", desc: "Đánh dấu bước tiến hội nhập sâu rộng vào sân chơi kinh tế toàn cầu.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" }
    ],
    figures: [
      { name: "Nguyễn Văn Linh", role: "Tổng Bí thư", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", desc: "Người khơi nguồn luồng gió Đổi mới, tác giả loạt bài 'Những việc cần làm ngay'." },
      { name: "Kim Ngọc", role: "Bí thư Tỉnh ủy Vĩnh Phúc", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80", desc: "Cha đẻ của 'Khoán hộ', tiền đề tư duy đổi mới nông nghiệp." }
    ],
    events: [
      { date: "12/1986", type: "Economic", title: "Đại hội đại biểu lần thứ VI", text: "Xóa bỏ rứt khoát cơ chế tập trung quan liêu bao cấp, phát triển kinh tế nhiều thành phần." },
      { date: "11/01/2007", type: "Global", title: "Chính thức gia nhập WTO", text: "Việt Nam trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới." }
    ]
  },
  {
    id: 5,
    title: "HALL 5: VIỆT NAM KỶ NGUYÊN SỐ & PHÁT TRIỂN PHỒN VINH",
    era: "2010 - NAY",
    desc: "Khát vọng vươn tầm thế giới, làm chủ công nghệ và xây dựng quốc gia số phồn vinh, hạnh phúc theo tinh thần Đại hội XIII.",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    timeline: [
      { year: "2015", text: "Bùng nổ hệ sinh thái khởi nghiệp số" },
      { year: "2019", text: "Bộ Chính trị ra Nghị quyết 52 về CMCN 4.0" },
      { year: "2020", text: "Phê duyệt chương trình Chuyển đổi số quốc gia" },
      { year: "2021", text: "Đại hội XIII xác định mục tiêu phát triển đến 2045" },
      { year: "2026", text: "Làm chủ hạ tầng số, AI và AI Chatbot nội địa" }
    ],
    relics: [
      { name: "Trung tâm Đổi mới sáng tạo", desc: "Nơi ươm mầm các giải pháp công nghệ cao hàng đầu đất nước.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80" }
    ],
    figures: [
      { name: "Thế hệ Gen Z", role: "Chiến sĩ số tương lai", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80", desc: "Lực lượng nòng cốt làm chủ tri thức khoa học, đưa nước nhà sánh vai năm châu." }
    ],
    events: [
      { date: "03/06/2020", type: "Digital", title: "Phê duyệt Chuyển đổi số quốc gia", text: "Phát triển đồng bộ cả Chính phủ số, Kinh tế số và Xã hội số." },
      { date: "01/2021", type: "Vision", title: "Đại hội đại biểu lần thứ XIII", text: "Xác định mốc lịch sử đưa Việt Nam thành nước phát triển, thu nhập cao vào năm 2045." }
    ]
  }
];