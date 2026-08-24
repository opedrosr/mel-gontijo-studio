import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

type PortfolioImage = {
  src: string;
  alt: string;
  category: string;
  label: string;
};

export default function Portfolio() {
  const categories =
    siteConfig.portfolio.categories as readonly string[];

  const images =
    siteConfig.portfolio.images as readonly PortfolioImage[];

  const [activeCategory, setActiveCategory] =
    useState<string>(categories[0] ?? 'Todos');

  const filteredImages = useMemo<PortfolioImage[]>(() => {
    if (activeCategory === 'Todos') {
      return [...images];
    }

    return images.filter(
      (image) =>
        image.category.toLowerCase() ===
        activeCategory.toLowerCase()
    );
  }, [activeCategory, images]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-ink-900 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-salmon-500/[0.018] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-salmon-500" />

              <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-500">
                {siteConfig.portfolio.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-cream-50 sm:text-5xl lg:text-6xl"
            >
              {siteConfig.portfolio.title}

              <br />

              <span className="italic text-salmon-500">
                {siteConfig.portfolio.highlight}
              </span>
            </motion.h2>
          </div>

          {/* FILTROS */}
          <motion.div
            variants={staggerItem}
            className="flex w-fit items-center gap-1 rounded-full border border-cream-50/10 bg-ink-800 p-1"
          >
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="relative rounded-full px-4 py-2.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream-50/45 transition-colors duration-300 hover:text-cream-50 sm:px-5"
                >
                  {selected && (
                    <motion.span
                      layoutId="portfolio-filter"
                      transition={{
                        duration: 0.4,
                        ease: easeLux,
                      }}
                      className="absolute inset-0 rounded-full bg-salmon-500"
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      selected ? 'text-ink-900' : ''
                    }`}
                  >
                    {category}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* GALLERY */}
        <motion.div className="grid auto-rows-[260px] grid-cols-2 gap-3 sm:auto-rows-[300px] sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              const featured =
                index === 0 ||
                index === filteredImages.length - 1;

              return (
                <motion.article
                  key={image.src}
                  layout
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                    ease: easeLux,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-cream-50/[0.06] bg-ink-800 ${
                    featured
                      ? 'col-span-2 row-span-2'
                      : 'col-span-1 row-span-1'
                  }`}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/15 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/20 bg-ink-900/30 text-[0.55rem] text-cream-50/80 backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-cream-50/20 bg-ink-900/30 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4 text-cream-50" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[0.5rem] uppercase tracking-[0.3em] text-salmon-500">
                          {image.category}
                        </p>

                        <h3
                          className={`font-serif italic text-cream-50 ${
                            featured
                              ? 'text-2xl sm:text-3xl'
                              : 'text-lg'
                          }`}
                        >
                          {image.label}
                        </h3>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream-50/20 opacity-70 transition-all duration-500 group-hover:translate-x-1 group-hover:border-salmon-500">
                        <ArrowUpRight className="h-4 w-4 text-cream-50 transition-colors group-hover:text-salmon-500" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: easeLux,
          }}
          className="mt-10 flex items-center justify-between border-t border-cream-50/[0.08] pt-6"
        >
          <span className="text-[0.52rem] uppercase tracking-[0.3em] text-cream-50/30">
            {String(filteredImages.length).padStart(2, '0')} trabalhos
          </span>

          <span className="text-[0.52rem] uppercase tracking-[0.3em] text-cream-50/30">
            {activeCategory}
          </span>
        </motion.div>
      </div>
    </section>
  );
}