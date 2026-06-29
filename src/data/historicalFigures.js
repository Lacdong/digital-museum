export const historicalFigures = [
  {
    id: "ho-chi-minh",
    name: "Hồ Chí Minh",
    title: "Chủ tịch nước",
    avatar: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=150&q=80",
    era: "1890 - 1969",
    tag: "Trí tuệ số",
    colorClass: "border-yellow-500/30 text-yellow-500 bg-yellow-500/5",
    // --- Bổ sung thuộc tính theo bản vẽ Visily ---
    quote: "“Không có gì quý hơn độc lập, tự do.”",
    bio: "Người sáng lập Đảng Cộng sản Việt Nam, lãnh đạo dân tộc giành độc lập năm 1945.",
    styleTags: ["Ôn tồn", "Sâu sắc", "Giàu tình thương"],
    callsCount: 12,
    accuracy: "98%",
    suggestions: [
      "Bác nghĩ gì về thế hệ trẻ ngày nay?",
      "Làm thế nào để giữ vững chí khí cách mạng?"
    ],
    greeting: "Chào cháu, thế hệ Gen Z - những chủ nhân tương lai của đất nước số. Cháu muốn cùng Bác ôn lại câu chuyện nào của Đảng hôm nay?",
    fallback: "Câu hỏi của cháu rất hay, nhưng hệ thống hiện chưa nạp đủ tư liệu về chi tiết này. Cháu có muốn hỏi về hành trình cứu nước, hay ngày độc lập 1945 không?",
    brain: [
      {
        keywords: ["thế hệ trẻ", "ngày nay", "gen z", "lời khuyên"],
        response: "Thế hệ các cháu hôm nay có công nghệ, có tri thức số, hãy dùng nó làm vũ khí để phụng sự tổ quốc, đưa Việt Nam sánh vai với các cường quốc năm châu như sinh thời Bác hằng mong mỏi."
      },
      {
        keywords: ["cứu nước", "ra đi", "1911"],
        response: "Ngày 5/6/1911, từ Bến cảng Nhà Rồng, Bác ra đi với hai bàn tay trắng và một quyết tâm cháy bỏng: Tìm xem các nước làm thế nào, để trở về giúp đồng bào mình giành tự do."
      }
    ]
  },
  {
    id: "nguyen-ai-quoc",
    name: "Nguyễn Ái Quốc",
    title: "Người tìm đường cứu nước",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    era: "Giai đoạn 1911 - 1930",
    tag: "Khát vọng trẻ",
    colorClass: "border-orange-500/30 text-orange-400 bg-orange-500/5",
    quote: "“Muốn được giải phóng, các dân tộc chỉ có thể trông cậy vào lực lượng của bản thân mình.”",
    bio: "Người chiến sĩ cách mạng kiên trung đi khắp thế giới, truyền bá chủ nghĩa Mác - Lênin về Việt Nam.",
    styleTags: ["Đanh thép", "Nhiệt huyết", "Bản lĩnh"],
    callsCount: 8,
    accuracy: "95%",
    suggestions: [
      "Hành trình đi qua 3 đại dương ra sao?",
      "Tờ báo Người cùng khổ ra đời thế nào?"
    ],
    greeting: "Chào đồng chí trẻ. Tôi là Nguyễn Ái Quốc của những năm tháng bôn ba. Đồng chí muốn trao đổi về hành trình tìm đường cứu nước hay quá trình chuẩn bị thành lập Đảng?",
    fallback: "Tư liệu ký ức giai đoạn này của tôi chưa định vị được câu hỏi. Đồng chí có muốn hỏi về báo Le Paria hay Luận cương Lênin không?",
    brain: [
      {
        keywords: ["luận cương", "lenin", "1920"],
        response: "Tháng 7/1920, khi đọc Luận cương của Lênin về vấn đề dân tộc và thuộc địa, tôi đã khóc vì hạnh phúc. Đây chính là con đường giải phóng cho đồng bào chúng ta!"
      }
    ]
  },
  {
    id: "vo-nguyen-giap",
    name: "Võ Nguyên Giáp",
    title: "Đại tướng Tổng tư lệnh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    era: "1911 - 2013",
    tag: "Quân sự số",
    colorClass: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
    quote: "“Chiến thắng Điện Biên Phủ là chiến thắng của lòng yêu nước và nghệ thuật quân sự độc đáo.”",
    bio: "Người Anh cả của Quân đội Nhân dân Việt Nam, thiên tài quân sự thế kỷ XX.",
    styleTags: ["Quyết đoán", "Điềm tĩnh", "Nhân văn"],
    callsCount: 24,
    accuracy: "99%",
    suggestions: [
      "Quyết định khó khăn nhất ở Điện Biên Phủ?",
      "Mệnh lệnh thần tốc năm 1975 ra sao?"
    ],
    greeting: "Chào bạn trẻ thế hệ số. Tôi là Võ Nguyên Giáp. Hãy cùng tôi tái hiện lại những chiến dịch quân sự lừng lẫy của dân tộc ta.",
    fallback: "Bạn trẻ thân mến, tư liệu quân sự của tôi chưa cập nhật nội dung này. Hãy trao đổi về trận Điện Biên Phủ hoặc mật lệnh Thần tốc 1975 nhé.",
    brain: [
      {
        keywords: ["điện biên phủ", "1954", "quyết định"],
        response: "Quyết định thay đổi phương châm từ 'Đánh nhanh thắng nhanh' sang 'Đánh chắc tiến chắc' tại Điện Biên Phủ là quyết định khó khăn nhất đời cầm quân của tôi, nhưng nó bảo đảm thắng lợi hoàn toàn."
      }
    ]
  }
];