import React from 'react';
import ScrollReveal from './common/ScrollReveal';
import Slideshow from './common/Slideshow';
import { photoById } from '../data/portfolio';
import { useLang } from '../i18n/LanguageContext';

// Thứ tự khớp với translations.approach.items
const PHOTOS = [
  ['field-portrait', 'kiss-street', 'beach-twirl', 'grass-seated'],
  ['river-boat', 'rice-field', 'rooftops', 'temple-courtyard'],
  ['lantern-portrait', 'umbrella-street', 'ao-dai-bougainvillea', 'yellow-wall'],
];

/** Ba nguyên tắc chụp: mỗi nguyên tắc một ảnh, một tiêu đề, một câu ngắn. */
export default function Approach() {
  const { t } = useLang();
  return (
    <section className="bg-emerald-tint px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal variant="blur" className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.approach.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] md:text-[2.5rem]">{t.approach.title}</h2>
        </ScrollReveal>

        <ul className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {t.approach.items.map((item, i) => (
            <li key={item.title}>
              <ScrollReveal delay={i * 150} variant={i === 1 ? 'zoom' : 'up'}>
                <Slideshow slides={PHOTOS[i].map((id) => photoById[id])} delay={i * 700} sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/5] w-full" />
                <p className="mt-5 text-sm font-bold tracking-[0.2em] text-emerald">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-[1.7] text-warm-gray">{item.text}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
