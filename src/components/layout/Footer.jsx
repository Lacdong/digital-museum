
export default function Footer() {
  return (
    <footer className="bg-[#070A10] border-t border-gray-800 text-gray-400 text-sm py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-lg tracking-wider">
            <span className="text-blue-500">✦</span>
            <span>GEN Z DIGITAL MUSEUM</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Dự án bảo tàng số hiện đại dành cho thế hệ trẻ, kết hợp công nghệ và lịch sử để lan tỏa giá trị truyền thống của Đảng Cộng sản Việt Nam.
          </p>
        </div>

        {/* Column 2: Khám phá */}
        <div>
          <h4 className="text-white font-semibold mb-4">Khám phá</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition">Hành trình lịch sử</a></li>
            <li><a href="#" className="hover:text-white transition">Sơ đồ tư duy</a></li>
            <li><a href="#" className="hover:text-white transition">Thử thách Quiz</a></li>
            <li><a href="#" className="hover:text-white transition">Góc nhìn Gen Z</a></li>
          </ul>
        </div>

        {/* Column 3: Tài liệu */}
        <div>
          <h4 className="text-white font-semibold mb-4">Tài liệu</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition">Văn kiện Đảng</a></li>
            <li><a href="#" className="hover:text-white transition">E-book Lịch sử</a></li>
            <li><a href="#" className="hover:text-white transition">Thư viện ảnh</a></li>
            <li><a href="#" className="hover:text-white transition">Phim tư liệu</a></li>
          </ul>
        </div>

        {/* Column 4: Kết nối */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Kết nối</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-600 mt-4">
            © 2026 GEN Z DIGITAL MUSEUM. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}