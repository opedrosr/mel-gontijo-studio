import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Instagram,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${
    siteConfig.contact.whatsapp
  }?text=${encodeURIComponent(
    'Olá, Mel! Gostaria de agendar um horário.'
  )}`;

  const { scrollY } = useScroll();

  const visualY = useTransform(scrollY, [0, 800], [0, 50]);
  const visualScale = useTransform(scrollY, [0, 800], [1, 1.03]);
  const contentY = useTransform(scrollY, [0, 700], [0, -35]);
  const glowY = useTransform(scrollY, [0, 900], [0, 160]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-ink-900"
    >
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: glowY }}
          className="absolute -right-[15%] -top-[20%] h-[650px] w-[650px] rounded-full bg-salmon-500/[0.045] blur-[140px]"
        />

        <motion.div
          style={{ y: glowY }}
          className="absolute -bottom-[25%] -left-[15%] h-[550px] w-[550px] rounded-full bg-salmon-500/[0.025] blur-[120px]"
        />

        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:100px_100px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cream-50/10 to-transparent" />
      </div>

      {/* MAIN */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_0.85fr] lg:gap-24">

          {/* CONTENT */}
          <motion.div
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-2xl"
          >
            <motion.div
              variants={staggerItem}
              className="mb-7 flex items-center gap-4"
            >
              <span className="relative h-px w-12 overflow-hidden bg-salmon-500/30">
                <motion.span
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: easeLux,
                  }}
                  className="absolute inset-y-0 left-0 w-full bg-salmon-500"
                />
              </span>

              <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-salmon-500 sm:text-xs">
                {siteConfig.hero.eyebrow}
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                variants={staggerItem}
                className="font-serif text-[3.4rem] leading-[0.98] tracking-[-0.035em] text-cream-50 sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem]"
              >
                <span className="inline-block">
                  {siteConfig.hero.title}
                </span>

                <br />

                <span className="inline-block italic text-salmon-500">
                  {siteConfig.hero.highlight}
                </span>

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.8,
                    ease: easeLux,
                  }}
                  className="ml-2 inline-flex align-middle sm:ml-4"
                >
                  <Sparkles
                    className="h-7 w-7 text-salmon-500 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                    strokeWidth={1}
                  />
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              variants={staggerItem}
              className="mt-8 max-w-lg text-sm leading-7 text-cream-50/55 sm:text-base sm:leading-8"
            >
              {siteConfig.hero.description}
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              {/* AGENDAR */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-none bg-salmon-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-900"
              >
                <motion.span
                  variants={{
                    hover: { x: 0 },
                  }}
                  initial={{ x: '-110%' }}
                  transition={{
                    duration: 0.5,
                    ease: easeLux,
                  }}
                  className="absolute inset-0 -translate-x-full bg-cream-50"
                />

                <span className="relative z-10 flex items-center gap-3">
                  <WhatsAppIcon className="h-4 w-4" />

                  Agendar horário

                  <motion.span
                    variants={{
                      hover: { x: 4 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: easeLux,
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
              </motion.a>

              {/* RESULTADOS */}
              <motion.a
                href="#portfolio"
                whileHover={{ x: 5 }}
                transition={{
                  duration: 0.35,
                  ease: easeLux,
                }}
                className="group inline-flex items-center justify-center gap-3 border border-cream-50/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream-50/75 transition-colors duration-300 hover:border-salmon-500/60 hover:text-salmon-500"
              >
                Ver resultados

                <ArrowRight className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </motion.a>

              {/* COMO CHEGAR */}
              <motion.a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  duration: 0.35,
                  ease: easeLux,
                }}
                className="group inline-flex items-center justify-center gap-3 border border-salmon-500/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-salmon-500 transition-colors duration-300 hover:border-salmon-500 hover:bg-salmon-500 hover:text-ink-900"
              >
                <MapPin className="h-4 w-4" />

                Como chegar

                <ArrowRight className="h-4 w-4 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </motion.a>
            </motion.div>

            {/* INSTAGRAM */}
            <motion.a
              variants={staggerItem}
              href={siteConfig.professional.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.25em] text-cream-50/35 transition-colors duration-300 hover:text-salmon-500"
            >
              <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

              {siteConfig.professional.instagram}

              <span className="h-px w-0 bg-salmon-500 transition-all duration-300 group-hover:w-6" />
            </motion.a>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.3,
              delay: 0.25,
              ease: easeLux,
            }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-10 bg-salmon-500/[0.025] blur-[100px]" />

            <motion.div
              style={{
                y: visualY,
                scale: visualScale,
              }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src="/images/volumeLuxo.jpeg"
                alt="Resultado Volume Luxo"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900 via-transparent via-50% to-ink-900/90" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/25" />

              <div className="pointer-events-none absolute -left-px inset-y-0 w-1/4 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent" />

              <div className="pointer-events-none absolute -right-px inset-y-0 w-1/4 bg-gradient-to-l from-ink-900 via-ink-900/70 to-transparent" />

              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: easeLux,
                }}
                className="absolute bottom-0 left-1/2 h-20 w-px origin-bottom bg-salmon-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 1,
          ease: easeLux,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream-50/25 transition-colors duration-300 hover:text-salmon-500 sm:flex"
      >
        <span className="text-[0.5rem] uppercase tracking-[0.4em]">
          Scroll
        </span>

        <span className="relative h-10 w-px overflow-hidden bg-cream-50/10">
          <motion.span
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-0 top-0 h-1/2 w-full bg-salmon-500"
          />
        </span>
      </motion.a>
    </section>
  );
}
