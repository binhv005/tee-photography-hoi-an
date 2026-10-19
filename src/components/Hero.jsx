import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const CLIPS = [1, 2, 3].map((n) => ({
  video: `/videos/hero/clip${n}.mp4`,
  poster: `/videos/hero/clip${n}.jpg`,
}));

function useMedia(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/** Theo dõi phần tử có đang nằm trong khung nhìn không (dùng để chỉ phát video khi đang xem hero). */
function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return inView;
}

/** Tách chuỗi thành từng từ, mỗi từ hiện dần lần lượt (word-reveal). */
function Words({ text, start = 0, step = 110 }) {
  return text.split(' ').map((word, i, arr) => (
    <React.Fragment key={`${word}-${i}`}>
      <span aria-hidden="true" className="word-in" style={{ animationDelay: `${start + i * step}ms` }}>{word}</span>
      {i < arr.length - 1 && ' '}
    </React.Fragment>
  ));
}

/** Hero kiểu mẫu: 3 video dọc đặt cạnh nhau, phủ kín chiều ngang, chữ đặt lên trên. */
export default function Hero() {
  const { t, lang } = useLang();
  const wide = useMedia('(min-width: 768px)');
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');
  // Mobile chỉ tải 1 video để nhẹ; reduced-motion chỉ hiện ảnh poster tĩnh.
  const clips = wide ? CLIPS : CLIPS.slice(0, 1);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const videos = useRef([]);

  // Chỉ phát khi hero đang trong khung nhìn, lướt qua thì dừng để tiết kiệm CPU và băng thông.
  useEffect(() => {
    videos.current.forEach((v) => {
      if (!v) return;
      if (inView) v.play?.().catch(() => {});
      else v.pause();
    });
  }, [inView, clips.length, reduceMotion]);

  return (
    <section ref={sectionRef} id="home" data-header="dark" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${clips.length}, minmax(0, 1fr))` }}>
        {clips.map((clip, i) => (
          <div key={clip.video} className="relative overflow-hidden border-l border-black/40 first:border-l-0">
            {reduceMotion ? (
              <img src={clip.poster} alt="" className="h-full w-full object-cover" />
            ) : (
              <video
                ref={(node) => { videos.current[i] = node; }}
                className="hero-img h-full w-full object-cover"
                src={clip.video}
                poster={clip.poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              />
            )}
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/45" />

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 pt-20 text-center">
        <h1 key={lang} aria-label={t.hero.title} className="max-w-5xl">
          <span className="title-brush block text-lg leading-tight sm:text-2xl lg:text-3xl">
            <Words text={t.hero.titleScript} />
          </span>
          <span className="title-slab -mt-2 block text-[1.45rem] leading-[1.1] sm:text-4xl lg:text-5xl">
            <Words text={t.hero.titleMain} start={t.hero.titleScript.split(' ').length * 110 + 150} step={150} />
          </span>
        </h1>
        {t.hero.text && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">{t.hero.text}</p>}
        <div className="hero-actions mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a href="#portfolio" className="btn btn-white">{t.hero.primary}</a>
          <a href="#contact" className="btn btn-light">{t.hero.secondary}</a>
        </div>
      </div>
    </section>
  );
}
