import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';
import { useLang } from '../i18n/LanguageContext';

/** Câu hỏi thường gặp dạng accordion, hai ảnh tĩnh pic1 / pic2 hai bên. */
export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-emerald-tint px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-[1fr_minmax(0,44rem)_1fr] lg:gap-12">
        <ScrollReveal variant="left" duration={1100} className="hidden w-[17rem] justify-self-end lg:block lg:-mt-16">
          <img src="/images/pic1.jpg" alt="" aria-hidden="true" width="736" height="1308" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
        </ScrollReveal>

        <div>
          <ScrollReveal variant="blur" className="text-center">
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2 className="mt-4 whitespace-nowrap text-[clamp(1.4rem,6.2vw,3rem)] font-bold">{t.faq.title}</h2>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-12 divide-y divide-[#e5e6e6] border-y border-[#e5e6e6]">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <h3 className="!text-base !font-semibold !tracking-normal">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold transition-colors hover:text-emerald-dark md:text-lg"
                    >
                      {item.q}
                      <Plus size={20} strokeWidth={1.8} className={`shrink-0 text-emerald transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 leading-[1.8] text-warm-gray">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          {/* Màn hình nhỏ: hai ảnh xếp ngang bên dưới danh sách câu hỏi */}
          <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
            <img src="/images/pic1.jpg" alt="" aria-hidden="true" width="736" height="1308" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
            <img src="/images/pic2.jpg" alt="" aria-hidden="true" width="667" height="1000" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
          </div>
        </div>

        <ScrollReveal variant="right" duration={1100} delay={150} className="hidden w-[17rem] justify-self-start lg:block lg:mt-16">
          <img src="/images/pic2.jpg" alt="" aria-hidden="true" width="667" height="1000" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
        </ScrollReveal>
      </div>
    </section>
  );
}
