import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, Star } from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-ink-900 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-salmon-500/[0.035] blur-[130px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-salmon-500" />

              <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-500">
                {siteConfig.testimonials.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-cream-50 sm:text-5xl lg:text-6xl"
            >
              {siteConfig.testimonials.title}

              <br />

              <span className="italic text-salmon-500">
                {siteConfig.testimonials.highlight}
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={staggerItem}
            className="flex items-center gap-3"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-3.5 w-3.5 fill-salmon-500 text-salmon-500"
                  strokeWidth={1}
                />
              ))}
            </div>

            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-cream-50/30">
              Experiências compartilhadas
            </span>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {siteConfig.testimonials.items.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={staggerItem}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.45,
                ease: easeLux,
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-cream-50/[0.08] p-7 sm:p-8 ${
                index === 1
                  ? 'bg-cream-50 text-ink-700'
                  : 'bg-cream-50/[0.035] text-cream-50'
              }`}
            >
              {/* Quote */}
              <Quote
                className={`absolute right-7 top-7 h-14 w-14 ${
                  index === 1
                    ? 'text-ink-700/[0.05]'
                    : 'text-cream-50/[0.05]'
                }`}
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="mb-10 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-3.5 w-3.5 fill-salmon-500 text-salmon-500"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className={`relative max-w-md font-serif text-xl leading-relaxed sm:text-2xl ${
                  index === 1
                    ? 'text-ink-700'
                    : 'text-cream-50'
                }`}
              >
                “{testimonial.text}”
              </p>

              {/* Client */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border border-salmon-500/20">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold ${
                        index === 1
                          ? 'text-ink-700'
                          : 'text-cream-50'
                      }`}
                    >
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[0.5rem] uppercase tracking-[0.2em] text-salmon-500">
                      {testimonial.service}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 8,
                  }}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    index === 1
                      ? 'border-ink-700/10'
                      : 'border-cream-50/10'
                  }`}
                >
                  <ArrowUpRight
                    className={`h-4 w-4 ${
                      index === 1
                        ? 'text-ink-700/40'
                        : 'text-cream-50/40'
                    }`}
                  />
                </motion.div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-salmon-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom statement */}
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
          className="mt-14 flex flex-col justify-between gap-6 border-t border-cream-50/[0.08] pt-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-xs leading-6 text-cream-50/30">
            O melhor resultado é aquele que faz você se olhar no espelho e
            reconhecer uma versão ainda mais confiante de si mesma.
          </p>

          <a
            href="#contato"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-salmon-500"
          >
            Quero viver essa experiência

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}