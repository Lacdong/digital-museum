#  V-Museum: Bảo Tàng Số Gen Z - Giải Mã Lịch Sử

**V-Museum (Gen Z Digital Museum)** là một nền tảng học tập và trải nghiệm lịch sử tương tác thời gian thực dành riêng cho thế hệ số. Dự án tái hiện các dòng chảy lịch sử hào hùng dưới lăng kính truyền thông số, phá bỏ rào cản khô khan của sách giáo khoa truyền thống bằng hệ thống phòng trưng bày ảo, kịch bản giả lập mạng xã hội, và sơ đồ mạng nhện quản trị tri thức.

---

##  Các Tính Năng Cốt Lõi (Key Features)

* **Phòng Triển Lãm Ảo & Đa Phương Tiện (`DigitalMuseum.jsx`):** Chuỗi hành trình số hóa tuyến tính đi qua lần lượt 5 Không gian lịch sử vĩ mô (Từ trước 1930 đến kỷ nguyên số 2026). Tích hợp trục thời gian, tư liệu hiện vật và nhân vật lịch sử thay đổi động mượt mà.
* **Góc Nhìn Gen Z (`GenZPerspective.jsx`):** Hệ thống giả lập bài viết mạng xã hội chuyên sâu về các kịch bản lịch sử "What-If" táo bạo. Hỗ trợ các tương tác real-time như Thả tim động, Lưu trữ bài viết và Đăng bình luận ẩn danh lưu dấu cục bộ qua `localStorage`.
* **Trao Đổi Với Vĩ Nhân (`HistoricalChat.jsx`):** Không gian đối thoại không đồng bộ với các nhân vật lịch sử qua cơ chế "Não bộ từ khóa". Sửa triệt để lỗi purity và nhân bản tin nhắn trong React Strict Mode.
* **Sơ Đồ Ký Ức Mạng Nhện (`HistoricalMindmap.jsx`):** Bản đồ liên kết tri thức nhân quả mô phỏng theo chế độ **Graph View của Obsidian**. Tích hợp lớp lưới phẳng SVG kết hợp cơ chế **Zoom & Pan chuột** tự do, cho phép lọc thẻ thực thể và tra cứu thông tin cục bộ.
* **Cấp Chứng Nhận Số Digital (`CertificateModal.jsx`):** Hệ thống Popup Cyber-UI xác thực danh tính khách tham quan. Tự động biên dịch khối HTML, kết xuất đồ họa và đóng gói xuất bản thành **file PDF khổ ngang (Landscape)** có họa tiết caro so le phối con dấu vàng kim và chữ ký thư pháp nghệ thuật (`html2canvas` + `jsPDF`).

---

##  Công Nghệ Sử Dụng (Tech Stack)

* **Frontend Library:** React.js (Cấu trúc hooks: `useState`, `useMemo`, `useCallback`, `useRef`, `useEffect`).
* **Build Tool:** Vite (Cơ chế quét module siêu tốc).
* **Styling:** Tailwind CSS (Tích hợp Glassmorphism mờ kính, hiệu ứng phát quang Neon và Text Gradient).
* **Vector Icons:** Lucide React (Đồng bộ 100% icon phẳng vector cao cấp).
* **PDF Compiler:** `jsPDF` kết hợp `html2canvas`.

---

### Cài Đặt Thư Viện 
* npm install

---

### Khởi Chạy 
* npm run dev

---

## Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
digital-museum/
├── public/                      # Thư mục chứa tài nguyên tĩnh công cộng
├── src/
│   ├── components/              # Các thành phần giao diện tái sử dụng
│   │   ├── common/
│   │   │   ├── CertificateModal.jsx  # Popup nhập tên & xuất file PDF chứng chỉ mẫu caro
│   │   │   └── FallingStars.jsx      # Hiệu ứng mưa sao băng chuyển động nền tối
│   │   └── layout/
│   │       ├── Header.jsx            # Thanh điều hướng dạng kén, có avatar online
│   │       └── Footer.jsx            # Chân trang tập trung
│   ├── data/                    # Cơ sở dữ liệu Mock-Data cục bộ
│   │   ├── historicalFigures.js      # Dữ liệu não bộ và tiểu sử của Vĩ nhân
│   │   ├── museumData.js             # Dữ liệu trục thời gian & hiện vật của 5 căn phòng
│   │   |── posts.js                  # Dữ liệu bài viết kịch bản What-If và comment mồi
|   |   |── member.js                 # Dữ liệu về đóng góp của thành viên
|   |   |── mindmapData.js            # Dữ liệu về mindmap
|   |   └── quiz.js                   # Dữ liệu để xây dựng các bài quiz
│   ├── pages/                   # Giao diện các trang chức năng chính
|   |   ├── GenZDigitalMuseum.jsx     # Sảnh chính 
│   │   ├── DigitalMuseum.jsx         # Sảnh chọn phòng và luồng chạy 5 không gian ảo
│   │   ├── DigitalQuiz.jsx           # Hệ thống câu hỏi trắc nghiệm số hóa
│   │   ├── DigitalTools.jsx          # Hộp công cụ nghiên cứu
│   │   ├── GenZPerspective.jsx       # Trang blog tương tác mạng xã hội thực tế
│   │   ├── HistoricalChat.jsx        # Phòng chat đối thoại lượng tử với Vĩ nhân
│   │   ├── HistoricalMindmap.jsx     # Bản đồ mạng lưới Obsidian có kéo thả & thu phóng
│   │   └── MemberContribution.jsx    # Trang đánh giá mức độ đóng góp của thành viên
│   ├── App.jsx                  # Tệp điều phối trung tâm và định tuyến Tab
│   ├── index.css                # Tệp cấu hình Tailwind CSS global
│   └── main.jsx                 # Điểm khởi tạo ứng dụng React
├── package.json                 # Quản lý các gói thư viện cài đặt (Dependencies)
├── tailwind.config.js           # Tùy biến cấu hình theme Tailwind
└── vite.config.js               # Cấu hình máy chủ phát triển Vite


