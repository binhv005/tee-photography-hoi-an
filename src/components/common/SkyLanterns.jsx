import React from 'react';

// Từng chiếc đèn trời riêng lẻ (cắt từ ảnh đèn trời gốc): vị trí ngang, cỡ, thời gian bay, độ trễ, độ lắc.
const LANTERNS = [
  { img: 1, left: 6, size: 64, dur: 22, delay: 0, sway: 18 },
  { img: 3, left: 16, size: 46, dur: 17, delay: 6, sway: -14 },
  { img: 4, left: 27, size: 26, dur: 14, delay: 2, sway: 10 },
  { img: 5, left: 38, size: 24, dur: 19, delay: 9, sway: -10 },
  { img: 2, left: 48, size: 78, dur: 26, delay: 4, sway: 22 },
  { img: 6, left: 59, size: 28, dur: 15, delay: 11, sway: -12 },
  { img: 3, left: 69, size: 52, dur: 20, delay: 1, sway: 16 },
  { img: 4, left: 79, size: 30, dur: 16, delay: 7, sway: -10 },
  { img: 1, left: 88, size: 58, dur: 24, delay: 13, sway: -18 },
  { img: 5, left: 94, size: 22, dur: 13, delay: 5, sway: 8 },
];

/** Đèn trời bay lên dần từ đáy section; chỉ để trang trí, nằm sau nội dung. */
export default function SkyLanterns() {
  return (
    <div aria-hidden="true" className="sky-lanterns pointer-events-none absolute inset-0 overflow-hidden">
      {LANTERNS.map((l, i) => (
        <img
          key={i}
          src={`/images/lantern-${l.img}.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          className="sky-lantern absolute select-none"
          style={{
            left: `${l.left}%`,
            width: `${l.size}px`,
            animationDuration: `${l.dur}s`,
            animationDelay: `-${l.delay}s`,
            '--sway': `${l.sway}px`,
          }}
        />
      ))}
    </div>
  );
}
