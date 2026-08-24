import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="perguntas"
      className="relative overflow-hidden bg-cream-50 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-salmon-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-salmon-500" />

              <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-600">
                {siteConfig.faq.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-ink-700 sm:text-5xl lg:text-6xl"
            >
              {siteConfig.faq.title}

              <br />

              <span className="italic text-salmon-500">
                {siteConfig.faq.highlight}
              </span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-7 max-w-sm text-sm leading-7 text-ink-700/40"
            >
              Tudo o que você precisa saber antes de reservar seu horário.
            </motion.p>
          </div>

          {/* Questions */}
          <motion.div
            variants={staggerContainer}
            className="border-t border-ink-700/10"
          >
            {siteConfig.faq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  variants={staggerItem}
                  className="border-b border-ink-700/10"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 font-mono text-[0.55rem] tracking-[0.15em] text-salmon-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`font-serif text-lg transition-colors duration-300 sm:text-xl ${
                          isOpen
                            ? 'text-salmon-500'
                            : 'text-ink-700 group-hover:text-salmon-500'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: easeLux,
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-700/10 transition-colors duration-300 group-hover:border-salmon-500"
                    >
                      <Plus className="h-4 w-4 text-ink-700/50 group-hover:text-salmon-500" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: easeLux,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-10 pr-12 sm:pl-14">
                          <p className="max-w-2xl text-sm leading-7 text-ink-700/45">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: easeLux,
          }}
          className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-ink-700/10 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-ink-700/35">
            Ainda ficou com alguma dúvida?
          </p>

          <a
            href="#contato"
            className="group inline-flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-salmon-600"
          >
            Fale comigo

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}