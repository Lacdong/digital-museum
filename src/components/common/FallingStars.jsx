import { useState } from 'react';

export default function FallingStars() {
  const [stars] = useState(() => 
    Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, 
      delay: `-${Math.random() * 6}s`,       
      duration: `${Math.random() * 3 + 2}s`, 
      size: Math.random() * 2.5 + 1.5,       
    }))
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1, // Đặt là 1 để nằm sau lớp nội dung z-10 của bạn
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="pure-falling-star"
          style={{
            position: 'absolute',
            top: '-50px',
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size * 25}px`, // Đã sửa: đưa chữ 'px' ra ngoài chuỗi template string
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes starFall {
          0% {
            transform: translateY(0) rotate(-20deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) translateX(200px) rotate(-20deg);
            opacity: 0;
          }
        }
        .pure-falling-star {
          background: linear-gradient(to bottom, #ffffff, #60a5fa, transparent);
          border-radius: 9999px;
          animation: starFall linear infinite;
        }
      `}} />
    </div>
  );
}