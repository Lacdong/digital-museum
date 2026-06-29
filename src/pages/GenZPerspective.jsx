import { useState } from 'react';
import Footer from '../components/layout/Footer';
import FallingStars from '../components/common/FallingStars';
import { genZPosts } from '../data/posts';
import { Heart, Bookmark, Share2, MessageSquare, Send, User } from 'lucide-react';

// Mảng ảnh nền fallback tương ứng cho 3 kịch bản What-If giống ảnh Visily
const postImages = {
  "post-1": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", // Máy cơ khí cổ
  "post-2": "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80", // Đài phát thanh Vintage
  "post-3": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80"  // Đô thị hiện đại Đổi Mới
};

// Mảng thẻ tag hiển thị đè lên ảnh
const postTags = {
  "post-1": "Kịch bản 1930",
  "post-2": "Kịch bản 1945",
  "post-3": "Kịch bản 1986"
};

export default function GenZPerspective() {
  const [activePostId, setActivePostId] = useState(genZPosts[0].id);
  const currentPost = genZPosts.find(p => p.id === activePostId) || genZPosts[0];
  const [newCommentText, setNewCommentText] = useState('');

  const [socialState, setSocialState] = useState(() => {
    const saved = localStorage.getItem('genz_perspective_social_v1');
    if (saved) return JSON.parse(saved);

    const defaultState = {};
    genZPosts.forEach(p => {
      defaultState[p.id] = {
        isLiked: false,
        isSaved: false,
        likesBonus: 0,
        customComments: []
      };
    });
    return defaultState;
  });

  const postState = socialState[activePostId] || { isLiked: false, isSaved: false, likesBonus: 0, customComments: [] };

  const handleToggleLike = () => {
    setSocialState(prev => {
      const nextState = {
        ...prev,
        [activePostId]: {
          ...prev[activePostId],
          isLiked: !prev[activePostId]?.isLiked,
          likesBonus: prev[activePostId]?.isLiked ? 0 : 1
        }
      };
      localStorage.setItem('genz_perspective_social_v1', JSON.stringify(nextState));
      return nextState;
    });
  };

  const handleToggleSave = () => {
    setSocialState(prev => {
      const nextState = {
        ...prev,
        [activePostId]: {
          ...prev[activePostId],
          isSaved: !prev[activePostId]?.isSaved
        }
      };
      localStorage.setItem('genz_perspective_social_v1', JSON.stringify(nextState));
      return nextState;
    });
  };

  const handleSendComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newCmt = {
      id: Date.now(),
      name: "Trạm Khách (You)",
      time: "Vừa xong",
      text: newCommentText
    };

    setSocialState(prev => {
      const currentComments = prev[activePostId]?.customComments || [];
      const nextState = {
        ...prev,
        [activePostId]: {
          ...prev[activePostId],
          customComments: [newCmt, ...currentComments]
        }
      };
      localStorage.setItem('genz_perspective_social_v1', JSON.stringify(nextState));
      return nextState;
    });

    setNewCommentText('');
  };

  const allComments = [...postState.customComments, ...currentPost.comments];

  return (
    <div className="bg-[#0B0F17] text-white min-h-screen font-sans relative overflow-x-hidden">
      <FallingStars />

      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          
          {/* LƯỚI ĐỈNH ĐẦU TRANG: CHIA 2 KHỐI LỚN CHUẨN VISILY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-800 pb-6">
            
            {/* VĂN BẢN TIÊU ĐỀ BÊN TRÁI (7 CỘT) */}
            <div className="lg:col-span-7 space-y-3">
              {/* 💡 ĐÃ SỬA: Biến đổi nhãn mác thành màu vàng chuẩn chỉnh */}
              <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block">
                Số mới nhất: Tư Duy Số
              </span>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-none">
                Góc Nhìn <span className="text-blue-500">Gen Z</span>: Giải <br />Mã Lịch Sử
              </h1>
              <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                Chúng mình không chỉ học lịch sử, chúng mình “sống” lại những khoảnh khắc đó qua lăng kính của thời đại đại số. Khám phá những kịch bản “What if” đầy táo bạo và thú vị.
              </p>
            </div>

            {/* 💡 ĐÃ BỔ SUNG: KHỐI PHẢI CHỨA TRÍCH DẪN & ĐIỂM SỐ THỐNG KÊ (5 CỘT) */}
            <div className="lg:col-span-5 space-y-4 w-full">
              {/* Ô trích dẫn chữ vàng thanh lịch */}
              <div className="bg-[#121824]/40 border border-gray-800 p-4 rounded-xl relative overflow-hidden text-right">
                <span className="text-3xl font-serif text-gray-700 absolute left-3 top-1 select-none">“</span>
                <p className="text-[11px] text-gray-300 italic text-left pl-6 leading-relaxed font-medium">
                  "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam."
                </p>
                <span className="text-[10px] text-amber-500 font-bold font-mono mt-1 block">— Hồ Chí Minh</span>
              </div>

              {/* Hàng chỉ số phụ bên dưới */}
              <div className="flex justify-end space-x-8 pr-2">
                <div>
                  <div className="text-lg font-black font-mono text-gray-200 tracking-wide">15K+</div>
                  <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Độc giả tháng</div>
                </div>
                <div className="w-px bg-gray-800 h-6 self-center"></div>
                <div>
                  <div className="text-lg font-black font-mono text-yellow-500 tracking-wide">42</div>
                  <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Chuyên mục số</div>
                </div>
              </div>
            </div>

          </div>

          {/* 💡 ĐÃ SỬA: LƯỚI 3 THẺ BÀI VIẾT CÓ ẢNH NỀN HÌNH ẢNH THỰC TẾ TRONG SUỐT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {genZPosts.map((post) => {
              const isSelected = post.id === activePostId;
              const bgImg = postImages[post.id] || postImages["post-1"];
              const capsuleTag = postTags[post.id] || "Kịch bản số";
              
              return (
                <button
                  key={post.id}
                  onClick={() => setActivePostId(post.id)}
                  style={{ backgroundImage: `url('${bgImg}')` }}
                  className={`text-left p-5 rounded-xl border flex flex-col justify-between min-h-[145px] transition duration-300 relative group bg-cover bg-center overflow-hidden ${
                    isSelected 
                      ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-[1.01]' 
                      : 'border-gray-800 hover:border-gray-600'
                  }`}
                >
                  {/* Lớp phủ màn đen mờ giúp text luôn hiển thị rõ ràng */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 z-0 group-hover:from-black/90 transition"></div>
                  
                  <div className="relative z-10 space-y-2 w-full">
                    {/* Nhãn Capsule màu xanh lơ phủ lên ảnh */}
                    <span className="text-[8px] bg-blue-500/80 text-white border border-blue-400/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block">
                      {capsuleTag}
                    </span>
                    <h3 className="text-xs md:text-xs font-bold text-gray-200 line-clamp-3 leading-relaxed group-hover:text-white transition">
                      “{post.cardTitle}”
                    </h3>
                  </div>
                  {isSelected && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 z-10"></div>}
                </button>
              );
            })}
          </div>

          {/* BỐ CỤC 2 CỘT CHÍNH: BÀI VIẾT VÀ BÌNH LUẬN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* CỘT TRÁI (8/12): CHI TIẾT NỘI DUNG BÀI VIẾT SỐ */}
            <section className="lg:col-span-8 bg-[#121824] border border-gray-800/50 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-800/50">
                <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-200">{currentPost.author}</h3>
                  <p className="text-[10px] text-gray-500 font-medium">{currentPost.authorTitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-base md:text-lg font-black text-gray-100 leading-tight">
                  {currentPost.title}
                </h2>
                
                <blockquote className="border-l-2 border-blue-500 pl-4 py-1 text-gray-400 text-xs italic leading-relaxed bg-blue-500/5 rounded-r">
                  “{currentPost.excerpt}”
                </blockquote>

                <p className="text-gray-300 text-xs leading-relaxed tracking-wide font-medium">
                  {currentPost.content}
                </p>
              </div>

              <div className="bg-[#161D2D] border border-gray-800 p-5 rounded-xl space-y-4">
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center space-x-2">
                  <span>📊</span> <span>{currentPost.infoTitle}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">{currentPost.infoLabel1}</div>
                    <div className="text-base font-black font-mono text-gray-300">{currentPost.infoValue1}</div>
                  </div>
                  <div className="space-y-1 border-l border-gray-800 pl-4">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">{currentPost.infoLabel2}</div>
                    <div className="text-base font-black font-mono text-yellow-500">{currentPost.infoValue2}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-500 font-bold">
                <div className="flex items-center space-x-6">
                  <button onClick={handleToggleLike} className={`flex items-center space-x-2 transition ${postState.isLiked ? 'text-red-500' : 'hover:text-gray-300'}`}>
                    <Heart className={`w-4 h-4 ${postState.isLiked ? 'fill-current' : ''}`} />
                    <span className="font-mono text-[11px]">{(currentPost.initialLikes + postState.likesBonus).toLocaleString()}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-mono text-[11px]">{allComments.length}</span>
                  </div>
                  <button onClick={() => alert("Đã sao chép liên kết bài viết")} className="flex items-center space-x-2 hover:text-gray-300 transition">
                    <Share2 className="w-4 h-4" />
                    <span>Chia sẻ</span>
                  </button>
                </div>
                <button onClick={handleToggleSave} className={`transition ${postState.isSaved ? 'text-yellow-500' : 'hover:text-gray-300'}`}>
                  <Bookmark className={`w-4 h-4 ${postState.isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

            </section>

            {/* CỘT PHẢI (4/12): BÌNH LUẬN VÀ THÀNH PHẦN XU HƯỚNG BÊN CẠNH */}
            <section className="lg:col-span-4 space-y-6">
              
              {/* Khối Bình luận chuyên biệt */}
              <div className="bg-[#121824] border border-gray-800/50 p-5 rounded-2xl shadow-xl space-y-4 flex flex-col justify-between min-h-[360px] max-h-[410px]">
                <div className="space-y-3 flex-1 flex flex-col overflow-hidden">
                  <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
                    Bình luận cộng đồng ({allComments.length})
                  </h3>

                  <div className="space-y-3.5 overflow-y-auto pr-1 custom-scrollbar flex-1">
                    {allComments.map((cmt) => (
                      <div key={cmt.id} className="bg-[#161D2D]/60 border border-gray-800/40 p-3 rounded-lg space-y-1.5 text-[11px]">
                        <div className="flex justify-between text-gray-500 font-bold">
                          <span className="text-gray-300">{cmt.name}</span>
                          <span className="font-mono text-[10px]">{cmt.time}</span>
                        </div>
                        <p className="text-gray-400 leading-normal">{cmt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 💡 ĐÃ BỔ SUNG: Nút "Xem thêm bình luận" nguyên bản đen tuyền */}
                <button 
                  type="button"
                  onClick={() => alert("Đã tải toàn bộ cây bình luận số hóa")}
                  className="w-full bg-[#0B0F17] hover:bg-black border border-gray-800/80 text-[10px] text-gray-400 hover:text-white font-bold py-2 rounded-lg transition text-center mb-1"
                >
                  Xem thêm bình luận
                </button>

                <form onSubmit={handleSendComment} className="relative flex items-center bg-[#161D2D] border border-gray-800 focus-within:border-blue-500 rounded-xl px-2.5 py-1.5 transition">
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Viết bình luận công khai..."
                    className="flex-1 bg-transparent px-2 text-xs text-gray-200 outline-none placeholder-gray-600 py-1"
                  />
                  <button type="submit" disabled={!newCommentText.trim()} className="text-blue-500 hover:text-blue-400 transition disabled:opacity-30 shrink-0 p-1">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Thẻ Xu hướng quan tâm */}
              <div className="bg-[#121824] border border-gray-800/50 p-5 rounded-2xl shadow-xl space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
                  ⚡ Đang được quan tâm
                </h3>
                <div className="space-y-3 pt-1">
                  {[
                    { tag: "Công nghệ", sub: "Chính trị", desc: "Kỷ nguyên số & Vai trò của Đảng" },
                    { tag: "Lối sống", sub: "Sáng tạo", desc: "Gen Z làm gì để giữ lửa truyền thống?" },
                    { tag: "Lịch sử", sub: "Nhân vật", desc: "Chuyện chưa kể về những Founder năm 1930" }
                  ].map((item, i) => (
                    <div key={i} className="group bg-[#161D2D]/40 hover:bg-[#161D2D] p-3 rounded-xl border border-gray-800/50 hover:border-gray-700 transition duration-200 cursor-pointer">
                      <div className="flex space-x-1.5 text-[8px] font-bold uppercase tracking-wider text-gray-500">
                        <span>{item.tag}</span><span>•</span><span>{item.sub}</span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-300 group-hover:text-white transition mt-1 line-clamp-1">
                        {item.desc}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>

          {/* BANNER KÊU GỌI HÀNH ĐỘNG DƯỚI ĐÁY */}
          <div className="bg-gradient-to-r from-blue-950/20 via-[#121824] to-blue-950/20 border border-blue-500/20 p-8 rounded-2xl text-center space-y-5 shadow-xl">
            <div className="space-y-1.5">
              <h2 className="text-base md:text-lg font-black uppercase tracking-wide">Bạn đã sẵn sàng để “giải mã” lịch sử?</h2>
              <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed">
                Hành trình còn dài với những phòng trưng bày ảo sống động và sơ đồ tư duy tương tác đang chờ bạn khám phá. Đừng để quá khứ chỉ nằm lại trong những trang sách.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 border border-blue-500 text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-md transition duration-200">
                Khám phá bảo tàng số
              </button>
              <button className="bg-transparent hover:bg-gray-800 border border-gray-800 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition duration-200">
                Xem Sơ đồ Tư duy
              </button>
            </div>
          </div>

        </main>
        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1F2937; border-radius: 9px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3B82F6; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}