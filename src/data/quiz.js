// Danh sách 9 gói thử thách hiển thị trên giao diện Dashboard
export const challengesData = [
  { id: "test-1", title: "Hành trình tìm đường cứu nước (1911-1930)", xp: 500, level: "Dễ", isLocked: false, img: "https://i.pinimg.com/736x/7a/84/6f/7a846fcde31b627f6e853664c3a10410.jpg" },
  { id: "test-2", title: "Thành lập Đảng & Cao trào Cách mạng (1930-1945)", xp: 500, level: "Dễ", isLocked: false, img: "https://i.pinimg.com/736x/90/6b/3f/906b3f5ab5e0c0942ee7751980f50344.jpg" },
  { id: "test-3", title: "Kháng chiến toàn quốc & Điện Biên Phủ (1945-1954)", xp: 500, level: "Trung bình", isLocked: false, img: "https://i.pinimg.com/736x/76/a7/23/76a72392d50880296f1f27f9cb0d4095.jpg" },
  { id: "test-4", title: "Xây dựng XHCN miền Bắc & Kháng chiến chống Mỹ (1954-1975)", xp: 500, level: "Khó", isLocked: true, img: "https://i.pinimg.com/736x/89/90/b9/8990b9412c598f66d4ed9c11999eec33.jpg" },
  { id: "test-5", title: "Đại thắng mùa Xuân 1975 & Thống nhất đất nước", xp: 500, level: "Khó", isLocked: true, img: "https://i.pinimg.com/1200x/fd/d6/00/fdd600064b8a54d811ab5778fd9d6325.jpg" },
  { id: "test-6", title: "Khủng hoảng kinh tế & Bước ngoặt Đổi mới (1975-1986)", xp: 500, level: "Trung bình", isLocked: false, img: "https://i.pinimg.com/736x/f2/5e/17/f25e1791476202c66cb12cf9342f84b0.jpg" },
  { id: "test-7", title: "Hội nhập quốc tế & Phát triển kinh tế (1986-2000)", xp: 500, level: "Trung bình", isLocked: false, img: "https://i.pinimg.com/736x/88/43/9b/88439b66fa964282f1b1cbd31ffbe4e1.jpg" },
  { id: "test-8", title: "Chân dung các Lãnh tụ & Tổng Bí thư của Đảng", xp: 500, level: "Khó", isLocked: true, img: "https://i.pinimg.com/736x/de/e5/92/dee59274c6bce27e56d5d4ead267066f.jpg" },
  { id: "test-9", title: "Các kỳ Đại hội Đảng & Văn kiện lịch sử cốt lõi", xp: 500, level: "Khó", isLocked: true, img: "https://i.pinimg.com/736x/75/47/8b/75478bb0bdd92bb5e66692b2dbb444f5.jpg" }
];

// Ngân hàng câu hỏi chi tiết: 9 bài kiểm tra x 10 câu = 90 câu hỏi
export const quizDatabase = {
  "test-1": [
    { question: "Nguyễn Ái Quốc ra đi tìm đường cứu nước vào ngày tháng năm nào?", options: ["05/06/1911", "19/05/1890", "02/09/1945", "03/02/1930"], correctAnswer: 0 },
    { question: "Người ra đi tìm đường cứu nước từ bến cảng nào?", options: ["Cảng Hải Phòng", "Cảng Ba Son", "Cảng Nhà Rồng", "Cảng Đà Nẵng"], correctAnswer: 2 },
    { question: "Sự kiện nào đánh dấu Nguyễn Ái Quốc tìm thấy con đường cứu nước đúng đắn?", options: ["Gia nhập Đảng Xã hội Pháp", "Đọc Luận cương của Lênin về vấn đề dân tộc và thuộc địa", "Dự Hội nghị Quốc tế Nông dân", "Thành lập Hội Việt Nam Cách mạng Thanh niên"], correctAnswer: 1 },
    { question: "Nguyễn Ái Quốc đã bỏ phiếu tán thành gia nhập Quốc tế Cộng sản tại Đại hội nào của Đảng Xã hội Pháp?", options: ["Đại hội Tours", "Đại hội Paris", "Đại hội Marseille", "Đại hội Versailles"], correctAnswer: 0 },
    { question: "Tờ báo do Nguyễn Ái Quốc sáng lập tại Pháp năm 1922 có tên là gì?", options: ["Người cùng khổ (Le Paria)", "Thanh niên", "Đời sống công nhân", "Nhân đạo"], correctAnswer: 0 },
    { question: "Tác phẩm nào của Nguyễn Ái Quốc xuất bản năm 1927 dùng làm giáo trình huấn luyện cán bộ?", options: ["Bản án chế độ thực dân Pháp", "Đường Kách mệnh", "Luận cương chính trị", "Chính cương vắn tắt"], correctAnswer: 1 },
    { question: "Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?", options: ["1920", "1923", "1925", "1927"], correctAnswer: 2 },
    { question: "Cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên là tờ báo nào?", options: ["Báo Tiền phong", "Báo Thanh niên", "Báo Tranh đấu", "Báo Búa liềm"], correctAnswer: 1 },
    { question: "Tổ chức cộng sản nào được thành lập đầu tiên ở Việt Nam vào tháng 6/1929?", options: ["Đông Dương Cộng sản Đảng", "An Nam Cộng sản Đảng", "Đông Dương Cộng sản Liên đoàn", "Đảng Tân Việt"], correctAnswer: 0 },
    { question: "Trước khi Đảng Cộng sản Việt Nam thành lập, nước ta có bao nhiêu tổ chức cộng sản hoạt động biệt lập?", options: ["2 tổ chức", "3 tổ chức", "4 tổ chức", "5 tổ chức"], correctAnswer: 1 }
  ],
  "test-2": [
    { question: "Hội nghị thành lập Đảng Cộng sản Việt Nam diễn ra từ ngày nào?", options: ["06/01 đến 08/02/1930", "03/02 đến 05/02/1930", "19/05 đến 25/05/1930", "02/09/1930"], correctAnswer: 0 },
    { question: "Ai là người chủ trì Hội nghị thành lập Đảng đầu năm 1930?", options: ["Trần Phú", "Nguyễn Ái Quốc", "Lê Hồng Phong", "Nguyễn Văn Cừ"], correctAnswer: 1 },
    { question: "Luận cương chính trị tháng 10/1930 do ai khởi thảo?", options: ["Hồ Chí Minh", "Trần Phú", "Trường Chinh", "Lê Duẩn"], correctAnswer: 1 },
    { question: "Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?", options: ["Nguyễn Văn Cừ", "Hồ Chí Minh", "Trần Phú", "Hà Huy Tập"], correctAnswer: 2 },
    { question: "Cao trào cách mạng đầu tiên do Đảng lãnh đạo sau khi thành lập là gì?", options: ["Phong trào 1930 - 1931", "Phong trào 1936 - 1939", "Phong trào Cách mạng tháng Tám", "Khởi nghĩa Nam Kỳ"], correctAnswer: 0 },
    { question: "Hình thức chính quyền cách mạng xuất hiện trong phong trào 1930-1931 tên là gì?", options: ["Cộng hòa Dân chủ", "Xô viết Nghệ - Tĩnh", "Ủy ban Lâm thời", "Chính phủ Liên hiệp"], correctAnswer: 1 },
    { question: "Đảng hoạt động công khai thông qua phong trào Đông Dương Đại hội vào giai đoạn nào?", options: ["1930-1931", "1932-1935", "1936-1939", "1939-1945"], correctAnswer: 2 },
    { question: "Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày nào?", options: ["22/12/1944", "19/08/1945", "02/09/1945", "30/04/1930"], correctAnswer: 0 },
    { question: "Chỉ thị lịch sử ngày 12/3/1945 của Ban Thường vụ Trung ương Đảng có tên là gì?", options: ["Toàn dân kháng chiến", "Nhật - Pháp bắn nhau và hành động của chúng ta", "Sửa đổi lối làm việc", "Kháng chiến kiến quốc"], correctAnswer: 1 },
    { question: "Cục diện Cách mạng Tháng Tám năm 1945 giành thắng lợi hoàn toàn tại Hà Nội vào ngày nào?", options: ["19/08/1945", "23/08/1945", "25/08/1945", "02/09/1945"], correctAnswer: 0 }
  ],
  "test-3": [
    { question: "Chính phủ lâm thời nước VNDCCH ra mắt quốc dân và đọc Tuyên ngôn Độc lập ở đâu?", options: ["Quảng trường Ba Đình", "Chợ Đồng Xuân", "Nhà hát Lớn", "Ga Hà Nội"], correctAnswer: 0 },
    { question: "Để giải quyết nạn dốt sau năm 1945, Chủ tịch Hồ Chí Minh đã ký sắc lệnh thành lập tổ chức nào?", options: ["Nha Bình dân học vụ", "Bộ Giáo dục", "Hội Khuyến học", "Trường đại học Nhân dân"], correctAnswer: 0 },
    { question: "Đường lối kháng chiến chống Pháp của Đảng được xác định rõ trong tác phẩm nào của đồng chí Trường Chinh?", options: ["Kháng chiến nhất định thắng lợi", "Bàn về cách mạng Việt Nam", "Chính cương Đảng", "Lời kêu gọi toàn quốc kháng chiến"], correctAnswer: 0 },
    { question: "Chiến dịch chủ động tiến công lớn đầu tiên của bộ đội chủ lực ta trong kháng chiến chống Pháp là gì?", options: ["Chiến dịch Việt Bắc 1947", "Chiến dịch Biên giới Thu Đông 1950", "Chiến dịch Tây Bắc 1952", "Chiến dịch Thượng Lào 1953"], correctAnswer: 1 },
    { question: "Đại hội đại biểu toàn quốc lần thứ II (1951) quyết định đổi tên Đảng thành gì?", options: ["Đảng Cộng sản Đông Dương", "Đảng Lao động Việt Nam", "Đảng Cộng sản Việt Nam", "Hội nghiên cứu Chủ nghĩa Mác"], correctAnswer: 1 },
    { question: "Kế hoạch quân sự mang tên tướng Pháp định kết thúc chiến tranh trong 18 tháng là gì?", options: ["Kế hoạch Rove", "Kế hoạch Navarre", "Kế hoạch De Lattre de Tassigny", "Kế hoạch Bollaert"], correctAnswer: 1 },
    { question: "Chiến dịch Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm?", options: ["45 ngày đêm", "50 ngày đêm", "54 ngày đêm", "56 ngày đêm"], correctAnswer: 3 },
    { question: "Ai là Tổng tư lệnh chiến dịch Điện Biên Phủ năm 1954?", options: ["Đại tướng Võ Nguyên Giáp", "Đại tướng Văn Tiến Dũng", "Đồng chí Trường Chinh", "Đại tướng Nguyễn Chí Thanh"], correctAnswer: 0 },
    { question: "Hiệp định kết thúc chiến tranh, lập lại hòa bình ở Đông Dương năm 1954 tên là gì?", options: ["Hiệp định Fontainebleau", "Hiệp định Giơ-nevơ (Geneva)", "Hiệp định Sơ bộ", "Hiệp định Paris"], correctAnswer: 1 },
    { question: "Chiến thắng Điện Biên Phủ vang dội vào ngày tháng năm nào?", options: ["30/04/1954", "07/05/1954", "19/05/1954", "27/07/1954"], correctAnswer: 1 }
  ],
  "test-4": [
    { question: "Sau năm 1954, vĩ tuyến nào được chọn làm giới tuyến quân sự tạm thời?", options: ["Vĩ tuyến 13", "Vĩ tuyến 15", "Vĩ tuyến 17", "Vĩ tuyến 20"], correctAnswer: 2 },
    { question: "Đại hội lần thứ mấy của Đảng đề ra nhiệm vụ chiến lược: Xây dựng MB, đấu tranh giải phóng MN?", options: ["Đại hội I", "Đại hội II", "Đại hội III", "Đại hội IV"], correctAnswer: 2 },
    { question: "Phong trào cách mạng bùng nổ ở Bến Tre năm 1960 mở đầu giai đoạn tiến công quân sự gọi là gì?", options: ["Phong trào Đồng khởi", "Phong trào Phá ấp chiến lược", "Phong trào Tìm Mỹ mà đánh", "Thi đua Ấp Bắc"], correctAnswer: 0 },
    { question: "Tuyến đường vận tải chiến lược trên bộ chi viện cho miền Nam mang tên là gì?", options: ["Đường Trường Sơn (Đường mòn Hồ Chí Minh)", "Đường số 1", "Đường số 9", "Đường chiến lược biên giới"], correctAnswer: 0 },
    { question: "Chiến lược chiến tranh đầu tiên của đế quốc Mỹ thực hiện ở miền Nam (1961-1965) là gì?", options: ["Chiến tranh đơn phương", "Chiến tranh đặc biệt", "Chiến tranh cục bộ", "Việt Nam hóa chiến tranh"], correctAnswer: 1 },
    { question: "Chiến lược chiến tranh sử dụng quân viễn chinh Mỹ trực tiếp tham chiến quy mô lớn (1965-1968) là gì?", options: ["Chiến tranh đặc biệt", "Chiến tranh cục bộ", "Việt Nam hóa chiến tranh", "Chiến tranh toàn diện"], correctAnswer: 1 },
    { question: "Cuộc Tổng tiến công và nổi dậy làm lung lay ý chí xâm lược của Mỹ dịp Tết năm nào?", options: ["Mậu Thân 1968", "Kỷ Dậu 1969", "Nhâm Tý 1972", "Giáp Dần 1974"], correctAnswer: 0 },
    { question: "Trận Điện Biên Phủ trên không đánh bại pháo đài bay B52 trên bầu trời Hà Nội diễn ra năm nào?", options: ["1968", "1970", "1972", "1973"], correctAnswer: 2 },
    { question: "Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết vào năm nào?", options: ["1971", "1972", "1973", "1974"], correctAnswer: 2 },
    { question: "Ai là người đại diện Chính phủ Cách mạng lâm thời Cộng hòa miền Nam VN ký Hiệp định Paris?", options: ["Nguyễn Thị Bình", "Xuân Thủy", "Lê Đức Thọ", "Nguyễn Duy Trinh"], correctAnswer: 0 }
  ],
  "test-5": [
    { question: "Chiến dịch mở màn cho cuộc Tổng tiến công và nổi dậy Xuân 1975 là chiến dịch nào?", options: ["Chiến dịch Tây Nguyên", "Chiến dịch Huế - Đà Nẵng", "Chiến dịch Hồ Chí Minh", "Chiến dịch Trị Thiên"], correctAnswer: 0 },
    { question: "Thành phố Buôn Ma Thuột được giải phóng hoàn toàn vào ngày nào mở màn thắng lợi Tây Nguyên?", options: ["04/03/1975", "10/03/1975", "11/03/1975", "24/03/1975"], correctAnswer: 1 },
    { question: "Bộ Chính trị quyết định đổi tên 'Chiến dịch giải phóng Sài Gòn - Gia Định' thành tên gì?", options: ["Chiến dịch Giải phóng miền Nam", "Chiến dịch Hồ Chí Minh", "Chiến dịch Thống Nhất", "Chiến dịch Quyết Thắng"], correctAnswer: 1 },
    { question: "Ai là Tư lệnh chiến dịch Hồ Chí Minh lịch sử năm 1975?", options: ["Đại tướng Võ Nguyên Giáp", "Đại tướng Văn Tiến Dũng", "Thượng tướng Trần Văn Trà", "Đại tướng Nguyễn Chí Thanh"], correctAnswer: 1 },
    { question: "Xe tăng mang số hiệu nào của quân giải phóng đã húc đổ cổng chính Dinh Độc Lập trưa ngày 30/4/1975?", options: ["Xe tăng 390", "Xe tăng 843", "Xe tăng 543", "Xe tăng 743"], correctAnswer: 0 },
    { question: "Tổng thống cuối cùng của chính quyền Sài Gòn buộc phải tuyên bố đầu hàng không điều kiện là ai?", options: ["Nguyễn Văn Thiệu", "Trần Văn Hương", "Dương Văn Minh", "Nguyễn Cao Kỳ"], correctAnswer: 2 },
    { question: "Lá cờ cách mạng tung bay trên nóc Dinh Độc Lập đánh dấu miền Nam hoàn toàn giải phóng vào lúc mấy giờ?", options: ["9 giờ 30 phút", "10 giờ 45 phút", "11 giờ 30 phút", "15 giờ 00 phút"], correctAnswer: 2 },
    { question: "Cuộc Tổng tuyển cử bầu Quốc hội chung của nước Việt Nam thống nhất diễn ra vào năm nào?", options: ["1975", "1976", "1977", "1978"], correctAnswer: 1 },
    { question: "Quốc hội khóa VI quyết định đổi tên nước ta thành Cộng hòa Xã hội Chủ nghĩa Việt Nam vào ngày nào?", options: ["30/04/1976", "02/07/1976", "02/09/1976", "19/12/1976"], correctAnswer: 1 },
    { question: "Thành phố Sài Gòn - Gia Định chính thức được đổi tên thành Thành phố Hồ Chí Minh từ năm nào?", options: ["1975", "1976", "1977", "1980"], correctAnswer: 1 }
  ],
  "test-6": [
    { question: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng họp vào năm nào?", options: ["1975", "1976", "1980", "1981"], correctAnswer: 1 },
    { question: "Trước thềm Đổi mới, nền kinh tế nước ta vận hành theo cơ chế kế hoạch hóa tập trung nào?", options: ["Cơ chế thị trường", "Cơ chế bao cấp", "Cơ chế tự do cạnh tranh", "Cơ chế hỗn hợp"], correctAnswer: 1 },
    { question: "Chỉ thị số 100-CT/TW (năm 1981) về cải tiến công tác khoán trong nông nghiệp thường gọi là gì?", options: ["Khoán sản phẩm (Khoán 100)", "Khoán 10", "Khoán hộ", "Khoán trắng"], correctAnswer: 0 },
    { question: "Cuộc khủng hoảng kinh tế - xã hội trầm trọng nhất của nước ta diễn ra vào thập niên nào?", options: ["Thập niên 50", "Thập niên 60", "Thập niên 70", "Thập niên 80"], correctAnswer: 3 },
    { question: "Hội nghị Trung ương 8 khóa V (năm 1985) đã quyết định xóa bỏ rứt khoát cơ chế nào?", options: ["Xóa bỏ tập trung quan liêu bao cấp", "Xóa bỏ kinh tế tư nhân", "Xóa bỏ kinh tế gia đình", "Xóa bỏ thương nghiệp quốc doanh"], correctAnswer: 0 },
    { question: "Ai là người đưa ra những tư tưởng đổi mới táo bạo về nông nghiệp với 'Khoán hộ' tại Vĩnh Phúc?", options: ["Kim Ngọc", "Lê Duẩn", "Nguyễn Văn Linh", "Võ Văn Kiệt"], correctAnswer: 0 },
    { question: "Đại hội lần thứ mấy của Đảng (tháng 12/1986) chính thức khởi xướng công cuộc Đổi mới toàn diện?", options: ["Đại hội IV", "Đại hội V", "Đại hội VI", "Đại hội VII"], correctAnswer: 2 },
    { question: "Khẩu hiệu hành động nổi tiếng do Đại hội VI đề ra là gì?", options: ["Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật", "Tất cả vì tiền tuyến", "Sản xuất đi đôi với tiết kiệm", "Đuổi kịp và vượt các nước tiên tiến"], correctAnswer: 0 },
    { question: "Đại hội VI xác định cơ cấu kinh tế phải tập trung vào mục tiêu nào?", options: ["Ba chương trình kinh tế lớn (Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu)", "Phát triển công nghiệp nặng", "Đô thị hóa nông thôn", "Cơ giới hóa toàn diện"], correctAnswer: 0 },
    { question: "Đại hội VI bầu đồng chí nào làm Tổng Bí thư dẫn dắt những năm đầu Đổi mới?", options: ["Trường Chinh", "Nguyễn Văn Linh", "Đỗ Mười", "Lê Khả Phiêu"], correctAnswer: 1 }
  ],
  "test-7": [
    { question: "Nghị quyết số 10 của Bộ Chính trị (năm 1988) giao quyền tự chủ sản xuất cho ai?", options: ["Hợp tác xã", "Hộ nông dân", "Doanh nghiệp nhà nước", "Tập đoàn kinh tế"], correctAnswer: 1 },
    { question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH được thông qua tại Đại hội nào?", options: ["Đại hội V", "Đại hội VI", "Đại hội VII (1991)", "Đại hội VIII"], correctAnswer: 2 },
    { question: "Việt Nam chính thức bình thường hóa quan hệ ngoại giao với Hoa Kỳ vào năm nào?", options: ["1993", "1994", "1995", "1996"], correctAnswer: 2 },
    { question: "Việt Nam trở thành thành viên chính thức của Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?", options: ["1992", "1994", "1995", "1997"], correctAnswer: 2 },
    { question: "Đại hội lần thứ mấy của Đảng (năm 1996) tuyên bố nước ta chuyển sang thời kỳ đẩy mạnh Công nghiệp hóa - Hiện đại hóa?", options: ["Đại hội VI", "Đại hội VII", "Đại hội VIII", "Đại hội IX"], correctAnswer: 2 },
    { question: "Bộ luật nào quy định quyền tự do thành lập doanh nghiệp tư nhân ra đời năm 1999 tạo cú hích lớn?", options: ["Luật Doanh nghiệp", "Luật Đầu tư", "Luật Thương mại", "Luật Dân sự"], correctAnswer: 0 },
    { question: "Thị trường Chứng khoán Việt Nam chính thức đi vào hoạt động tại TP.HCM vào năm nào?", options: ["1998", "2000", "2002", "2005"], correctAnswer: 1 },
    { question: "Đại hội Đảng lần thứ IX (năm 2001) xác định mô hình kinh tế tổng quát của nước ta là gì?", options: ["Kinh tế thị trường định hướng xã hội chủ nghĩa", "Kinh tế thị trường tự do", "Kinh tế hàng hóa nhiều thành phần", "Kinh tế tập trung có điều tiết"], correctAnswer: 0 },
    { question: "Hiệp định Thương mại song phương Việt Nam - Hoa Kỳ (BTA) chính thức có hiệu lực vào năm nào?", options: ["1995", "2000", "2001", "2003"], correctAnswer: 2 },
    { question: "Năm 1989, Việt Nam đạt thành tựu gì mang tính bước ngoặt về lương thực?", options: ["Xóa được nạn đói, bắt đầu xuất khẩu gạo đứng thứ 3 thế giới", "Nhập khẩu kỷ lục lúa mì", "Hoàn thành cơ giới hóa 100%", "Thành lập tổng kho lương thực quốc gia"], correctAnswer: 0 }
  ],
  "test-8": [
    { question: "Ai là người viết tác phẩm chính trị luận cương nổi tiếng 'Tự chỉ trích' năm 1939?", options: ["Trần Phú", "Hà Huy Tập", "Nguyễn Văn Cừ", "Trường Chinh"], correctAnswer: 2 },
    { question: "Đồng chí Trường Chinh giữ cương vị Tổng Bí thư của Đảng trong bao nhiêu giai đoạn?", options: ["1 giai đoạn", "2 giai đoạn", "3 giai đoạn", "4 giai đoạn"], correctAnswer: 1 },
    { question: "Vị Tổng Bí thư nào ký quyết định lịch sử phát lệnh Tổng tiến công giải phóng miền Nam năm 1975?", options: ["Hồ Chí Minh", "Trường Chinh", "Lê Duẩn", "Nguyễn Văn Linh"], correctAnswer: 2 },
    { question: "Bút danh 'N.V.L' với loạt bài viết chiến đấu 'Những việc cần làm ngay' trên báo Nhân Dân là của ai?", options: ["Nguyễn Văn Linh", "Lê Khả Phiêu", "Nông Đức Mạnh", "Nguyễn Phú Trọng"], correctAnswer: 0 },
    { question: "Chủ tịch Hồ Chí Minh qua đời vào năm nào?", options: ["1965", "1968", "1969", "1975"], correctAnswer: 2 },
    { question: "Ai là Tổng Bí thư đầu tiên của Đảng không thuộc thế hệ chiến sĩ cách mạng tiền khởi nghĩa?", options: ["Lê Khả Phiêu", "Nông Đức Mạnh", "Nguyễn Phú Trọng", "Đỗ Mười"], correctAnswer: 1 },
    { question: "Tổng Bí thư Trần Phú hy sinh tại nhà thương Chợ Quán khi mới bao nhiêu tuổi?", options: ["25 tuổi", "27 tuổi", "30 tuổi", "35 tuổi"], correctAnswer: 1 },
    { question: "Câu nói bất hủ: 'Hãy giữ vững chí khí chiến đấu' là lời dặn lại của đồng chí nào trước lúc hy sinh?", options: ["Trần Phú", "Nguyễn Văn Cừ", "Võ Văn Tần", "Nguyễn Thị Minh Khai"], correctAnswer: 0 },
    { question: "Vị Tổng Bí thư nào của Đảng có thời gian giữ cương vị liên tục lâu nhất (1960-1986)?", options: ["Hồ Chí Minh", "Lê Duẩn", "Trường Chinh", "Nguyễn Phú Trọng"], correctAnswer: 1 },
    { question: "Đại tướng Võ Nguyên Giáp qua đời vào năm nào?", options: ["2010", "2011", "2013", "2015"], correctAnswer: 2 }
  ],
  "test-9": [
    { question: "Đại hội đại biểu toàn quốc lần thứ I của Đảng (năm 1935) diễn ra ở đâu?", options: ["Hà Nội, Việt Nam", "Ma Cao, Trung Quốc", "Quảng Châu, Trung Quốc", "Vientiane, Lào"], correctAnswer: 1 },
    { question: "Đại hội Đảng lần thứ mấy lần đầu tiên được tổ chức tại thủ đô Hà Nội?", options: ["Đại hội I", "Đại hội II", "Đại hội III (1960)", "Đại hội IV"], correctAnswer: 2 },
    { question: "Văn kiện 'Chiến lược phát triển kinh tế - xã hội 10 năm 2021-2030' được thông qua tại Đại hội nào?", options: ["Đại hội XI", "Đại hội XII", "Đại hội XIII", "Đại hội XIV"], correctAnswer: 2 },
    { question: "Đại hội XIII của Đảng xác định mục tiêu đưa nước ta trở thành nước phát triển, thu nhập cao vào năm nào?", options: ["2030", "2035", "2045", "2050"], correctAnswer: 2 },
    { question: "Năm 2007, Việt Nam chính thức gia nhập tổ chức thương mại quốc tế nào đánh dấu mốc hội nhập lớn?", options: ["WTO", "IMF", "WB", "APEC"], correctAnswer: 0 },
    { question: "Nội dung chỉ đạo chiến lược 'Phát triển kinh tế là nhiệm vụ trung tâm; xây dựng Đảng là nhiệm vụ then chốt' xuất phát từ Đại hội nào?", options: ["Đại hội VII", "Đại hội VIII", "Đại hội IX", "Đại hội X"], correctAnswer: 1 },
    { question: "Điều lệ Đảng Cộng sản Việt Nam hiện hành do Đại hội toàn quốc lần thứ mấy thông qua?", options: ["Đại hội X", "Đại hội XI", "Đại hội XII", "Đại hội XIII"], correctAnswer: 1 },
    { question: "Nghị quyết số 52-NQ/TW của Bộ Chính trị khóa XII nhấn mạnh việc chủ động tham gia cuộc cách mạng nào?", options: ["Cách mạng công nghiệp lần thứ ba", "Cách mạng công nghiệp lần thứ tư (4.0)", "Cách mạng xanh", "Cách mạng nông nghiệp số"], correctAnswer: 1 },
    { question: "Đại hội nào của Đảng khẳng định: 'Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm kim chỉ nam cho hành động'?", options: ["Đại hội V", "Đại hội VI", "Đại hội VII", "Đại hội VIII"], correctAnswer: 2 },
    { question: "Văn kiện Đại hội XIII xác định động lực chủ yếu để phát triển đất nước trong kỷ nguyên mới là gì?", options: ["Khai thác tài nguyên thiên nhiên", "Đổi mới sáng tạo, khoa học và công nghệ", "Tăng cường lao động thủ công", "Mở rộng thị trường truyền thống"], correctAnswer: 1 }
  ], 
  "special-event": [
  { question: "Đoàn TNCS Hồ Chí Minh được thành lập vào ngày tháng năm nào?", options: ["26/03/1931", "19/05/1941", "03/02/1930", "22/12/1944"], correctAnswer: 0 },
  { question: "Ai là người người Đoàn viên Cộng sản đầu tiên?", options: ["Võ Thị Sáu", "Lý Tự Trọng", "Cù Chính Lan", "Kim Đồng"], correctAnswer: 1 },
  { question: "Câu nói: 'Con đường của thanh niên chỉ có thể là con đường cách mạng...' là của ai?", options: ["Nguyễn Văn Trỗi", "Lý Tự Trọng", "Trần Văn Ơn", "Nguyễn Thái Học"], correctAnswer: 1 },
  { question: "Đại hội Đại biểu toàn quốc lần thứ I của Đoàn (năm 1950) được tổ chức tại tỉnh nào?", options: ["Hà Nội", "Cao Bằng", "Thái Nguyên", "Tuyên Quang"], correctAnswer: 2 },
  { question: "Bài ca chính thức của Đoàn TNCS Hồ Chí Minh (Thanh niên làm theo lời Bác) do ai sáng tác?", options: ["Hoàng Hòa", "Văn Cao", "Lưu Hữu Phước", "Phan Huỳnh Điểu"], correctAnswer: 0 },
  { question: "Phong trào hành động cách mạng 'Ba sẵn sàng' của thanh niên được phát động vào năm nào?", options: ["1954", "1964", "1975", "1986"], correctAnswer: 1 },
  { question: "Tổ chức Đoàn chính thức được mang tên 'Đoàn Thanh niên Cộng sản Hồ Chí Minh' từ năm nào?", options: ["1970", "1975", "1976", "1980"], correctAnswer: 2 },
  { question: "Huy hiệu Đoàn Thanh niên Cộng sản Hồ Chí Minh do họa sĩ nào thiết kế?", options: ["Tô Ngọc Vân", "Huỳnh Văn Thuận", "Bùi Xuân Phái", "Trần Văn Cẩn"], correctAnswer: 1 },
  { question: "Tổ chức cách mạng dành riêng cho thanh niên do Nguyễn Ái Quốc thành lập vào tháng 6/1925 tên là gì?", options: ["Hội Việt Nam Cách mạng Thanh niên", "Tâm Tâm Xã", "Việt Nam Quang phục Hội", "Việt Nam Quốc dân Đảng"], correctAnswer: 0 },
  { question: "Khẩu hiệu hành động của Đại hội Đoàn toàn quốc lần thứ XII nhiệm kỳ 2022-2027 là gì?", options: ["Thanh niên Việt Nam: Bản lĩnh, Khát vọng, Tiên phong, Sáng tạo, Phát triển", "Đâu cần thanh niên có, việc khó có thanh niên", "Thanh niên xung kích xây dựng và bảo vệ Tổ quốc", "Tuổi trẻ sáng tạo, dựng xây tương lai số"], correctAnswer: 0 }
]
};