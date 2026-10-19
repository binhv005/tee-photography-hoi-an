import React, { useState } from 'react';
import ScrollReveal from './common/ScrollReveal';
import Photo from './common/Photo';
import { photoById } from '../data/portfolio';
import { useLang } from '../i18n/LanguageContext';

// Mỗi tab (theo thứ tự intro.points) hiển thị một bộ ảnh khác nhau trong khung "trình duyệt".
const TAB_PHOTOS = [
  ['umbrella-street', 'alley', 'lantern-portrait', 'kiss-street', 'rice-field', 'ring-detail', 'ao-dai-bougainvillea', 'river-boat'],
  ['field-portrait', 'beach-twirl', 'umbrella-yellow-house', 'temple-courtyard', 'grass-seated', 'yellow-wall', 'rooftops', 'alley'],
  ['ring-detail', 'kiss-street', 'rice-field', 'umbrella-street', 'lantern-portrait', 'field-portrait', 'river-boat', 'beach-twirl'],
  ['rooftops', 'yellow-wall', 'grass-seated', 'temple-courtyard', 'ao-dai-bougainvillea', 'umbrella-yellow-house', 'alley', 'kiss-street'],
];

export default function Intro() {
  const { t, lang } = useLang();
  const [tab, setTab] = useState(0);
  const photos = TAB_PHOTOS[tab].map((id) => photoById[id]).filter(Boolean);

  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 pb-12 pt-20 md:px-10 md:pb-14 md:pt-28">
      <div className="relative mx-auto max-w-[1240px]">
        <ScrollReveal variant="blur" className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-emerald-dark">{t.intro.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.2] md:text-[2.5rem]">{t.intro.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.8] text-warm-gray">{t.intro.text}</p>
        </ScrollReveal>

        <div role="tablist" aria-label={t.intro.eyebrow} className="mt-9 flex flex-wrap justify-center gap-2.5">
          {t.intro.points.map((point, i) => (
            <button
              key={point}
              type="button"
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-colors ${
                tab === i ? 'bg-emerald text-white' : 'bg-ivory text-charcoal hover:bg-grey-60'
              }`}
            >
              {point}
            </button>
          ))}
        </div>

        <ScrollReveal variant="tilt" duration={1200} className="mt-10">
          <div className="relative isolate mx-auto h-[300px] overflow-hidden bg-[#7a3a12] px-4 pt-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] sm:h-[420px] md:h-[520px] md:px-[10%] md:pt-10">
            {/* Ảnh nền làm mờ nhẹ, vẫn nhìn ra hình đèn trời */}
            <img src="/images/bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover blur-[18px]" />
            <div className="h-full rounded-t-xl bg-white p-2 shadow-xl md:p-3">
              <div className="mb-2 flex items-center justify-between px-1 text-[8px] font-semibold uppercase tracking-wider text-charcoal md:mb-3 md:text-[10px]">
                <span>{t.hero.titleScript}</span>
                <span className="text-warm-gray">{t.intro.points[tab]}</span>
              </div>
              <div key={tab} className="lb-fade columns-3 gap-1.5 md:columns-4 md:gap-2">
                {photos.map((p, i) => (
                  <Photo key={`${p.id}-${i}`} photo={p} sizes="(min-width: 768px) 15vw, 30vw" className="mb-1.5 h-auto w-full md:mb-2" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 text-center">
          <a href="#portfolio" className="btn btn-solid">{t.intro.cta}</a>
        </div>
      </div>
    </section>
  );
}
