export default function Header({ activeTab, setActiveTab }) {
  const navItems = [
    { label: "Trang chủ", id: "home" },
    { label: "Bảo tàng số", id: "museum" },
    { label: "Mindmap", id: "mindmap" },
    { label: "Góc Gen Z", id: "genz" },
    { label: "Quiz", id: "quiz" },
    { label: "Trao đổi", id: "chat" },
    { label: "Thành viên", id: "member" },
    { label: "Công cụ", id: "tools" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)} // Kích hoạt hàm chuyển tab của App.jsx
              className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                activeTab === item.id
                  ? "text-blue-500 border-b-2 border-blue-500" // Tab đang chọn sẽ sáng lên
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
