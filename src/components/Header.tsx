import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { easeLux } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Curso', href: '#curso' },
  { label: 'FAQ', href: '#perguntas' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    'Olá, Mel! Gostaria de agendar um horário.'
  )}`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-42% 0px -52% 0px',
      }
    );

    NAV.forEach(({ href }) => {
      const element = document.querySelector(href);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
        ease: easeLux,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto max-w-[1400px] px-4 transition-all duration-500 sm:px-6 lg:px-10 ${
          scrolled ? 'mt-2' : 'mt-4'
        }`}
      >
        <div
          className={`flex h-[68px] items-center justify-between px-5 transition-all duration-500 sm:px-7 ${
            scrolled
              ? 'border border-cream-50/[0.08] bg-ink-900/80 backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{
              x: 2,
            }}
            transition={{
              duration: 0.3,
              ease: easeLux,
            }}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            {/* Initial */}
            <span className="shrink-0 font-serif text-3xl italic leading-none text-cream-50 transition-colors duration-300 group-hover:text-salmon-500 sm:text-3xl">
              {siteConfig.professional.logoInitial}
            </span>

            {/* Brand */}
            <span className="min-w-0 border-l border-cream-50/10 pl-2.5 sm:pl-3">
              <span className="block truncate text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream-50 sm:text-[0.65rem] sm:tracking-[0.25em]">
                {siteConfig.professional.name}
              </span>

              <span className="mt-1 block truncate text-[0.4rem] uppercase tracking-[0.2em] text-cream-50/35 sm:text-[0.45rem] sm:tracking-[0.3em]">
                {siteConfig.professional.profession}
              </span>
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[0.55rem] font-medium uppercase tracking-[0.18em] text-cream-50/45 transition-colors duration-300 hover:text-cream-50 xl:text-[0.58rem] xl:tracking-[0.2em]"
              >
                <span className="mr-1.5 text-salmon-500/0 transition-colors group-hover:text-salmon-500/60">
                  0{index + 1}
                </span>

                {item.label}

                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-salmon-500 transition-all duration-300 ${
                    active === item.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: easeLux,
            }}
            className="hidden items-center gap-2 border border-salmon-500/60 px-5 py-2.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-salmon-500 transition-colors duration-300 hover:bg-salmon-500 hover:text-ink-900 sm:flex"
          >
            Agendar

            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream-50/10 text-cream-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
              ease: easeLux,
            }}
            className="mx-4 mt-2 border border-cream-50/[0.08] bg-ink-900/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col p-4">
              {NAV.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-cream-50/[0.06] px-3 py-4 text-xs uppercase tracking-[0.18em] text-cream-50/60 transition-colors hover:text-salmon-500"
                >
                  <span>
                    <span className="mr-3 text-[0.5rem] text-salmon-500/50">
                      0{index + 1}
                    </span>

                    {item.label}
                  </span>

                  <ArrowUpRight className="h-4 w-4 opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-salmon-500 px-5 py-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-900"
              >
                Agendar horário

                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}