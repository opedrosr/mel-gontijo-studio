import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

const icons = [UserRound, Sparkles, ShieldCheck, Check];

export default function WhyChooseMe() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-cream-100 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-salmon-500/[0.035] blur-[130px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[450px] w-[450px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-salmon-500" />

              <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-600">
                {siteConfig.whyChooseMe.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-ink-700 sm:text-5xl lg:text-6xl"
            >
              Por que escolher
              <br />
              <span className="italic text-salmon-500">
                meu trabalho?
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-sm leading-8 text-ink-700/50 lg:pb-2"
          >
            Cada detalhe foi pensado para que o seu atendimento seja mais do
            que um procedimento. É sobre se sentir confortável, segura e
            satisfeita com o resultado.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-ink-700/10 bg-ink-700/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.whyChooseMe.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover="hover"
                className="group relative min-h-[320px] overflow-hidden bg-cream-50 p-7 transition-colors duration-500 hover:bg-ink-900 sm:p-8 lg:min-h-[360px]"
              >
                {/* Decorative number */}
                <span className="absolute right-6 top-6 font-serif text-5xl italic text-ink-700/[0.05] transition-colors duration-500 group-hover:text-cream-50/[0.05]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <motion.div
                  variants={{
                    hover: {
                      y: -4,
                      rotate: -4,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: easeLux,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-salmon-500/20 bg-salmon-500/[0.06] transition-colors duration-500 group-hover:border-salmon-500/30 group-hover:bg-salmon-500/10"
                >
                  <Icon
                    className="h-5 w-5 text-salmon-500"
                    strokeWidth={1.3}
                  />
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-8 left-7 right-7 sm:left-8 sm:right-8">
                  <h3 className="font-serif text-2xl text-ink-700 transition-colors duration-500 group-hover:text-cream-50">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-ink-700/45 transition-colors duration-500 group-hover:text-cream-50/45">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-salmon-600 transition-colors duration-500 group-hover:text-salmon-400">
                    <span>Conheça a experiência</span>

                    <motion.span
                      variants={{
                        hover: {
                          x: 4,
                          y: -4,
                        },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: easeLux,
                      }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </motion.span>
                  </div>
                </div>

                {/* Hover line */}
                <motion.span
                  variants={{
                    hover: {
                      scaleX: 1,
                    },
                  }}
                  initial={{
                    scaleX: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeLux,
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-salmon-500"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: easeLux,
          }}
          className="mt-16 grid gap-8 border-t border-ink-700/10 pt-8 sm:grid-cols-2 sm:items-end"
        >
          <div>
            <span className="text-[0.5rem] uppercase tracking-[0.3em] text-salmon-600">
              O cuidado está nos detalhes
            </span>

            <p className="mt-3 max-w-lg font-serif text-2xl leading-tight text-ink-700 sm:text-3xl">
              Seu resultado começa muito antes de você chegar ao studio.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <motion.a
              href="#contato"
              whileHover={{
                x: 4,
              }}
              transition={{
                duration: 0.3,
                ease: easeLux,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-ink-700 px-6 py-3.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream-50 transition-colors duration-300 hover:bg-salmon-500 hover:text-ink-900"
            >
              Agendar minha experiência

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}