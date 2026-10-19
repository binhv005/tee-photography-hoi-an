import React from 'react';
import ScrollReveal from './common/ScrollReveal';
import Slideshow from './common/Slideshow';
import ContactForm from './ContactForm';
import { photoById } from '../data/portfolio';
import { useLang } from '../i18n/LanguageContext';

/**
 * Liên hệ: biểu mẫu nằm ở lớp dưới, ảnh vòm cửa nằm lớp trên và đè lên mép trái của thẻ.
 * Chiều cao ảnh bị giới hạn theo chiều cao màn hình để cả section vừa một màn hình.
 */
export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-14 md:px-10 md:py-16">
      {/* Vòng tròn trang trí phía sau */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-6 h-[30rem] w-[30rem] rounded-full border border-emerald/25" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 h-[30rem] w-[30rem] rounded-full border border-emerald/15" />

      <ScrollReveal variant="blur" className="relative mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold leading-[1.2] md:text-4xl">{t.contact.title}</h2>
      </ScrollReveal>

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-0">
        {/* Lớp trên: ảnh vòm + polaroid */}
        <ScrollReveal variant="left" duration={1100} className="relative z-20 w-full max-w-[16rem] shrink-0 lg:max-w-none lg:w-auto">
          <div className="aspect-[3/4] overflow-hidden rounded-t-[999px] bg-grey-60 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] lg:h-[min(68vh,540px)]">
            <Slideshow slides={[{ src: '/images/form.jpg' }, photoById['umbrella-street'], photoById['field-portrait']]} sizes="(min-width: 1024px) 400px, 256px" className="h-full w-full" />
          </div>

          <div className="absolute -bottom-8 -right-6 w-28 rotate-6 bg-white p-1.5 pb-5 shadow-xl sm:-right-10 sm:w-32">
            <Slideshow slides={['yellow-wall', 'alley', 'ring-detail'].map((id) => photoById[id])} delay={900} sizes="140px" className="aspect-square w-full" />
            <p className="mt-1.5 text-center font-serif text-[11px] italic text-warm-gray">Hội An</p>
          </div>
        </ScrollReveal>

        {/* Lớp dưới: thẻ biểu mẫu, chừa lề trái để ảnh phủ lên */}
        <ScrollReveal variant="right" delay={150} className="relative z-10 w-full flex-1 bg-emerald p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] md:p-9 lg:-ml-20 lg:py-9 lg:pl-28 lg:pr-10">
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
