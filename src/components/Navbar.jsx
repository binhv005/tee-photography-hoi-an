import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { site } from '../data/site';

export function LangSwitch({ className = '' }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center gap-2 text-xs font-semibold tracking-[0.14em] ${className}`}>
      {['vi', 'en'].map((code, i) => (
        <React.Fragment key={code}>
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
            className={`uppercase transition-opacity ${lang === code ? 'opacity-100 border-b border-current' : 'opacity-60 hover:opacity-100'}`}
          >
            {code}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

const LINKS = [
  ['home', '#home'],
  ['about', '#about'],
  ['portfolio', '#portfolio'],
  ['services', '#services'],
  ['contact', '#contact'],
];

export default function Navbar() {
  const { t } = useLang();
  const [overDark, setOverDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Header trong suốt; màu chữ đổi theo nền của section đang nằm dưới header
  // (section nền tối đánh dấu bằng data-header="dark").
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const stack = document.elementsFromPoint(window.innerWidth / 2, 48);
      const section = stack.find((el) => !el.closest('header'))?.closest('[data-header]');
      setOverDark(section?.dataset.header === 'dark');
      // Mục menu đang xem: section cuối cùng đã chạm đỉnh màn hình
      let current = 'home';
      LINKS.forEach(([key, href]) => {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= 120) current = key;
      });
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const dark = overDark && !open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        dark ? 'border-transparent bg-transparent text-white' : 'border-[#f0f0f0] bg-white text-charcoal shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#home" onClick={() => setOpen(false)} aria-label={site.fullName} className="block">
          <img
            src={dark ? '/images/brand/logo-light.webp' : '/images/brand/logo-dark.webp'}
            alt={site.fullName}
            width="937"
            height="218"
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([key, href]) => (
            <a key={key} href={href} aria-current={active === key ? 'true' : undefined}
              className={`border-b-2 py-1 text-[0.92rem] font-medium transition-all ${active === key ? 'border-emerald opacity-100' : 'border-transparent opacity-75 hover:opacity-100'}`}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-7 lg:flex">
          <LangSwitch />
          <a href="#contact" className={`btn ${dark ? 'btn-light' : 'btn-solid'} !py-2.5`}>
            {t.nav.book}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.close : t.nav.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
        </button>
      </div>

    </header>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="lb-fade fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-white px-6 pb-10 pt-8 text-charcoal lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map(([key, href]) => (
              <li key={key}>
                <a href={href} onClick={() => setOpen(false)} className="block border-b border-[#f0f0f0] py-4 text-2xl font-semibold tracking-tight">
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-6">
            <LangSwitch className="text-sm" />
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid">
              {t.nav.book}
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
