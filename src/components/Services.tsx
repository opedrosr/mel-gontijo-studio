import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { useRef } from 'react';
import { easeLux } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-15% 0px',
  });

  const services = siteConfig.services.items;

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative overflow-hidden bg-cream-100 py-24 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[30%] h-[500px] w-[500px] rounded-full bg-salmon-500/[0.06] blur-[140px]" />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-ink-700/[0.10] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: easeLux,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-salmon-500" />

              <span className="text-[0.55rem] uppercase tracking-[0.4em] text-salmon-600">
                {siteConfig.services.eyebrow}
              </span>
            </div>

            <p className="mt-6 max-w-[220px] text-[0.6rem] uppercase leading-relaxed tracking-[0.25em] text-ink-700/40">
              Procedimentos personalizados para valorizar sua beleza e seu
              estilo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
              delay: 0.1,
              ease: easeLux,
            }}
          >
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.services.title}{' '}
              <span className="italic text-salmon-500">
                {siteConfig.services.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* SERVICES */}
        <div className="mt-16 lg:mt-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.7,
                delay: 0.15 + index * 0.08,
                ease: easeLux,
              }}
              className="group border-t border-ink-700/[0.10]"
            >
              <div className="relative flex flex-col gap-6 py-7 sm:py-9 lg:flex-row lg:items-center lg:gap-10">

                {/* NUMBER */}
                <div className="flex shrink-0 items-center gap-5 lg:w-28">
                  <motion.span
                    initial={{ opacity: 0.35 }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.08,
                    }}
                    className="text-[0.55rem] tracking-[0.3em] text-salmon-600"
                  >
                    {service.number}
                  </motion.span>

                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{
                      width: 32,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.25 + index * 0.08,
                      ease: easeLux,
                    }}
                    className="hidden h-px bg-salmon-500 lg:block"
                  />
                </div>

                {/* SERVICE CONTENT */}
                <div className="flex flex-1 items-center justify-between gap-6">
                  <div className="min-w-0">

                    {/* CATEGORY */}
                    <span className="text-[0.5rem] uppercase tracking-[0.3em] text-salmon-600">
                      {service.category}
                    </span>

                    {/* TITLE */}
                    <motion.h3
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25 + index * 0.08,
                        ease: easeLux,
                      }}
                      className="mt-2 font-serif text-2xl italic text-ink-900 sm:text-3xl lg:text-4xl"
                    >
                      {service.title}
                    </motion.h3>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.35 + index * 0.08,
                        ease: easeLux,
                      }}
                      className="mt-3 max-w-xl text-xs leading-6 text-ink-700/55 sm:text-sm"
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* PRICE */}
                  <div className="hidden shrink-0 text-right sm:block">
                    <span className="block text-sm font-medium text-ink-900">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* ARROW */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.4 + index * 0.08,
                    },
                    scale: {
                      duration: 0.5,
                      delay: 0.4 + index * 0.08,
                    },
                    y: {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.25,
                    },
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-700/10 bg-cream-50"
                >
                  <ArrowUpRight className="h-4 w-4 text-salmon-600" />
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-ink-700/[0.10]" />
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3 text-[0.55rem] uppercase tracking-[0.25em] text-ink-700/40">
            <Clock className="h-3.5 w-3.5 text-salmon-500" />

            Atendimento com hora marcada
          </div>

          <a
            href="#contato"
            className="group flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-salmon-600"
          >
            Agendar atendimento

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
