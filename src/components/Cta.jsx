import React from 'react';
import ScrollReveal from './common/ScrollReveal';
import Photo from './common/Photo';
import Slideshow from './common/Slideshow';
import { photoById } from '../data/portfolio';
import { useLang } from '../i18n/LanguageContext';
import { site } from '../data/site';

/** CTA trước footer kiểu Pixieset: tiêu đề + nút, bên dưới là bộ khung điện thoại / máy tính / máy tính bảng bị cắt ở đáy. */
export default function Cta() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-emerald-tint px-5 pt-20 md:px-10 md:pt-28">
      <ScrollReveal variant="blur" className="relative mx-auto max-w-4xl text-center">
        <h2 className="whitespace-nowrap text-[clamp(1.05rem,4.4vw,2.5rem)] font-bold leading-[1.2]">{t.cta.title}</h2>
        <p className="mt-4 text-sm text-warm-gray">{t.cta.text}</p>
        <a href="#contact" className="btn btn-solid mt-8">{t.cta.button}</a>
      </ScrollReveal>

      <div className="relative mx-auto mt-12 aspect-[1083/405] w-full max-w-[1083px]">
        {/* Máy tính: ảnh chân dung lớn + menu + tên studio */}
        <ScrollReveal variant="tilt" duration={1200} className="absolute bottom-0 left-[23.1%] top-0 w-[63%] overflow-hidden border border-black/10 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
          <Slideshow slides={['ao-dai-bougainvillea', 'umbrella-street', 'kiss-street', 'rice-field'].map((id) => photoById[id])} sizes="(min-width: 1024px) 760px, 90vw" className="h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-[7px] font-medium uppercase tracking-[0.2em] text-white md:px-10 md:py-5 md:text-[10px]">
            <span className="flex gap-3 md:gap-8"><span className="whitespace-nowrap">{t.nav.home}</span><span className="whitespace-nowrap">{t.nav.about}</span><span className="whitespace-nowrap">{t.nav.services}</span></span>
            <span className="text-[10px] tracking-[0.3em] md:text-lg">{site.brand}</span>
            <span className="flex gap-3 md:gap-8"><span className="whitespace-nowrap">{t.nav.portfolio}</span><span className="whitespace-nowrap">{t.nav.contact}</span></span>
          </div>
          <div className="absolute inset-x-0 top-[48%] text-center text-white">
            <p className="text-xl font-light uppercase tracking-[0.12em] md:text-5xl">{site.brand}</p>
            <p className="mt-2 text-[6px] uppercase tracking-[0.3em] text-white/70 md:text-[10px]">{t.footer.tagline}</p>
          </div>
        </ScrollReveal>

        {/* Điện thoại: ảnh trên, thẻ thông tin trắng bên dưới */}
        <ScrollReveal variant="left" delay={350} duration={1100} className="absolute bottom-0 left-[11.3%] z-10 h-[69%] w-[14.1%] overflow-hidden border-2 border-white bg-[#f4f4f4] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] md:border-4">
          <div className="relative h-[52%]">
            <Slideshow slides={['lantern-portrait', 'umbrella-yellow-house', 'alley'].map((id) => photoById[id])} delay={500} sizes="220px" className="h-full w-full" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
            <p className="absolute inset-x-2 bottom-2 text-center text-[7px] font-medium leading-snug text-white md:text-[11px]">{t.hero.titleScript}</p>
          </div>
          <div className="relative -mt-1 mx-1.5 bg-white p-2 text-[6px] text-warm-gray md:mx-2.5 md:p-3 md:text-[9px]">
            <p className="flex items-center gap-1.5 text-[8px] font-bold text-charcoal md:text-xs">{t.nav.book}<span className=" bg-emerald-tint px-1.5 py-0.5 text-[5px] font-semibold text-emerald-dark md:text-[7px]">{site.brand}</span></p>
            <div className="mt-2 space-y-1.5 md:mt-3 md:space-y-2.5">
              <div className="h-1 w-3/4 rounded bg-grey-60" />
              <div className="h-1 w-1/2 rounded bg-grey-60" />
              <div className="h-1 w-2/3 rounded bg-grey-60" />
            </div>
          </div>
        </ScrollReveal>

        {/* Máy tính bảng: ảnh bìa + tên + lưới 3 ảnh */}
        <ScrollReveal variant="right" delay={500} duration={1100} className="absolute bottom-0 left-[68.2%] z-10 h-[75%] w-[28.7%] overflow-hidden border-2 border-white bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] md:border-4">
          <div className="relative h-[58%]">
            <Slideshow slides={['field-portrait', 'beach-twirl', 'grass-seated'].map((id) => photoById[id])} delay={1000} sizes="340px" className="h-full w-full" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
            <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[8px] font-semibold uppercase tracking-[0.15em] text-white md:text-sm">{site.brand}</p>
          </div>
          <div className="grid grid-cols-3 gap-1 p-1 md:gap-2 md:p-2">
            {['umbrella-street', 'kiss-street', 'rice-field'].map((id) => (
              <Photo key={id} photo={photoById[id]} sizes="120px" className="aspect-[3/4] w-full object-cover" />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
