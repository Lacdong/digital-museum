import { useState } from 'react';
import Footer from '../components/layout/Footer';
import FallingStars from '../components/common/FallingStars';

export default function DigitalTools() {
  // Bộ lọc danh mục công cụ
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả công cụ' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'dev', label: 'Lập trình & Dev' },
    { id: 'ai-content', label: 'AI & Biên tập nội dung' }
  ];

  const toolsData = [
    {
      id: 'visily',
      name: 'Visily AI',
      category: 'design',
      badge: 'UI/UX Design',
      colorClass: 'border-pink-500/30 text-pink-400 bg-pink-500/5',
      glowColor: 'rgba(236, 72, 153, 0.4)',
      desc: 'Công cụ thiết kế giao diện thông minh thế hệ mới. Hỗ trợ chuyển đổi nhanh từ bản phác thảo tay hoặc ảnh chụp màn hình thành wireframe UI cấu trúc chuẩn cho Bảo tàng số.',
      highlight: 'AI Design to Code / Wireframing',
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.373-9.374m-9.373 9.374l1.11-1.11m-1.11 1.11v3.31a.75.75 0 001.28.53l3.31-3.31m-4.59-1.64l4.59 1.64m-4.59-1.64l-3.31 3.31A.75.75 0 012 19.5v-3.31a.75.75 0 01.22-.53l9.374-9.373m0 0l1.11-1.11a2.25 2.25 0 113.182 3.182l-1.11 1.11m-3.182-3.182l3.182 3.182m-3.182-3.182L15 6" />
        </svg>
      )
    },
    {
      id: 'vscode',
      name: 'VS Code & DevTools',
      category: 'dev',
      badge: 'Development',
      colorClass: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      desc: 'Môi trường lập trình tối ưu tích hợp bộ tiện ích Tailwind CSS IntelliSense, ESLint. Hỗ trợ biên dịch siêu tốc giao diện ứng dụng Single Page Application qua Vite.',
      highlight: 'ReactJS / Tailwind Engine',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      id: 'gemini',
      name: 'Google Gemini AI',
      category: 'ai-content',
      badge: 'AI Research',
      colorClass: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      desc: 'Trợ lý AI đắc lực phục vụ việc tra cứu nâng cao. Phân tích văn bản dài, tổng hợp và hệ thống hóa các mốc văn kiện, tư liệu lịch sử Đảng Cộng sản Việt Nam với độ chính xác cao.',
      highlight: 'Deep Research & Văn kiện số',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.187-.904L9 9l.813 5.096L15 15l-5.187.904zM19.071 4.929l-.707 3.535-3.536.708 3.536.707.707 3.535.707-3.535 3.536-.707-3.536-.708-.707-3.535z" />
        </svg>
      )
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT (DALL-E 3)',
      category: 'ai-content',
      badge: 'AI Generation',
      colorClass: 'border-purple-500/30 text-purple-400 bg-purple-500/5',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      desc: 'Hỗ trợ lên kịch bản câu hỏi tương tác (Quiz), thiết kế các tình huống "Nếu như" cho góc nhìn Gen Z. Đồng thời ứng dụng nhân DALL-E để phác thảo ảnh minh họa lịch sử dạng Hologram.',
      highlight: 'Content Script / Prompt Image',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.596.596 0 01-.73-.698l.409-2.13A10.187 10.187 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      )
    },
    {
      id: 'notebook',
      name: 'Digital Course Notebook',
      category: 'ai-content',
      badge: 'Learning Resource',
      colorClass: 'border-yellow-500/30 text-yellow-500 bg-yellow-500/5',
      glowColor: 'rgba(234, 179, 8, 0.4)',
      desc: 'Hệ thống lưu trữ giáo trình số, sách điện tử về Lý luận chính trị và Lịch sử Đảng. Giúp thành viên tra cứu nhanh các quy chuẩn kiến thức nền tảng để nạp vào cơ sở dữ liệu core.',
      highlight: 'E-book Reader / Giáo trình số',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ];

  // Lọc danh sách công cụ theo tab đang click
  const filteredTools = activeFilter === 'all' 
    ? toolsData 
    : toolsData.filter(t => t.category === activeFilter);

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Đầu trang */}
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3 inline-block">
              Hạ tầng kỹ thuật dự án
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase">
              Hộp Công Cụ Hỗ Trợ Số Hóa
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Thanh chuyển đổi Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-xs md:text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-[#121824] border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Lưới danh sách thẻ Công cụ (Grid Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="tool-cyber-card bg-[#121824] border border-gray-800/80 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 group"
                style={{ '--card-glow': tool.glowColor }}
              >
                <div>
                  {/* Hộp chứa Icon + Badge phân loại */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="bg-[#1A2333] p-3 rounded-xl border border-gray-800 group-hover:border-gray-700 transition">
                      {tool.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${tool.colorClass}`}>
                      {tool.badge}
                    </span>
                  </div>

                  {/* Tên công cụ */}
                  <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition">
                    {tool.name}
                  </h3>

                  {/* Mô tả tính năng */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>

                {/* Phần chân thẻ (Footer Card): Chứa thông số cốt lõi + nút action */}
                <div className="pt-4 border-t border-gray-800/60 mt-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Tính năng chính:</span>
                    <span className="text-[11px] text-gray-300 font-mono font-semibold">{tool.highlight}</span>
                  </div>
                  
                  <button className="w-full bg-[#161D2D] hover:bg-purple-600 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Khởi chạy công cụ</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </main>
        
        <Footer />
      </div>

      {/* CSS quét ánh sáng Neon độc quyền cho Hộp công cụ */}
      <style dangerouslySetInnerHTML={{__html: `
        .tool-cyber-card:hover {
          transform: translateY(-5px);
          border-color: var(--card-glow);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.7), 0 0 20px var(--card-glow);
        }
      `}} />

    </div>
  );
}