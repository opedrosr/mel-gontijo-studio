import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { easeLux } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-15% 0px',
  });

  const paragraphs = siteConfig.about.paragraphs;

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-hidden bg-ink-900 py-28 sm:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-15%] top-[20%] h-[600px] w-[600px] rounded-full bg-salmon-500/[0.025] blur-[150px]" />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cream-50/[0.08] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: easeLux,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-salmon-500" />

              <span className="text-[0.55rem] uppercase tracking-[0.4em] text-salmon-500">
                {siteConfig.about.eyebrow}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: easeLux,
            }}
          >
            <h2 className="max-w-5xl font-serif text-4xl leading-[1.02] tracking-[-0.035em] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.about.title}

              <br />

              <span className="italic text-salmon-500">
                {siteConfig.about.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* FOTO DA PROFISSIONAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
              clipPath: 'inset(8% 0% 8% 0% round 2rem)',
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    clipPath: 'inset(0% 0% 0% 0% round 2rem)',
                  }
                : {}
            }
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: easeLux,
            }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2.2rem] border border-salmon-500/10" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream-50/10 bg-ink-800">
              <img
                src={siteConfig.about.image}
                alt="Mel Gontijo — Lash Design"
                className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/10 via-transparent to-salmon-500/[0.035]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 bg-ink-900/30 backdrop-blur-md">
                    <Sparkles
                      className="h-4 w-4 text-salmon-500"
                      strokeWidth={1.2}
                    />
                  </span>

                  <div>
                    <p className="text-[0.5rem] uppercase tracking-[0.3em] text-salmon-500">
                      Beauty experience
                    </p>

                    <p className="mt-1 font-serif text-lg italic text-cream-50">
                      Beleza com intenção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: easeLux,
            }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`max-w-xl text-sm leading-8 sm:text-base ${
                    index === 0
                      ? 'text-cream-50/70'
                      : 'text-cream-50/40'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* IDADE */}
            <div className="mt-12 border-y border-cream-50/[0.08] py-7">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-salmon-500/25 bg-salmon-500/[0.06]">
                  <span className="font-serif text-2xl italic text-salmon-500">
                    25
                  </span>
                </div>

                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.3em] text-cream-50/30">
                    Idade
                  </p>

                  <p className="mt-1 font-serif text-xl text-cream-50 sm:text-2xl">
                    25 anos
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="group mt-10 inline-flex w-fit items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cream-50 transition-colors duration-300 hover:text-salmon-500"
            >
              Conheça meu trabalho

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-all duration-300 group-hover:border-salmon-500 group-hover:bg-salmon-500 group-hover:text-ink-900">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}