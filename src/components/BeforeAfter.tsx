import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Sparkles } from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const value = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, value)));
  };

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;
      updatePosition(event.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <section className="relative overflow-hidden bg-ink-900 px-5 py-24 lg:px-8 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-salmon-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          {/* Content */}
          <div className="max-w-xl">
            <motion.div
              variants={staggerItem}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-salmon-500" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-salmon-500">
                {siteConfig.beforeAfter.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl"
            >
              {siteConfig.beforeAfter.title}

              <br />

              <span className="italic text-salmon-500">
                {siteConfig.beforeAfter.highlight}
              </span>

              <Sparkles
                className="ml-3 inline h-7 w-7 text-salmon-500"
                strokeWidth={1.2}
              />
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-md text-sm leading-7 text-cream-50/55 sm:text-base"
            >
              Um resultado bem executado está nos pequenos detalhes. Compare
              o antes e depois e veja a transformação de perto.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-cream-50/10 bg-ink-800/60 px-5 py-3 backdrop-blur-sm"
            >
              <ArrowLeftRight className="h-4 w-4 text-salmon-500" />

              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream-50/60">
                Arraste para comparar
              </span>
            </motion.div>
          </div>

          {/* Before / After */}
          <motion.div
            variants={staggerItem}
            className="relative"
          >
            <div
              ref={containerRef}
              className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] border border-cream-50/10 bg-ink-800 shadow-card"
              onMouseDown={(event) => {
                setIsDragging(true);
                updatePosition(event.clientX);
              }}
              onTouchStart={(event) => {
                setIsDragging(true);
                updatePosition(event.touches[0].clientX);
              }}
            >
              {/* AFTER - base image */}
              <img
                src={siteConfig.beforeAfter.after}
                alt={siteConfig.beforeAfter.afterLabel}
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* BEFORE image */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{
                  width: `${position}%`,
                }}
              >
                <img
                  src={siteConfig.beforeAfter.before}
                  alt={siteConfig.beforeAfter.beforeLabel}
                  draggable={false}
                  className="absolute inset-0 h-full w-full max-w-none object-cover"
                  style={{
                    width: containerRef.current?.offsetWidth || '100%',
                  }}
                />

                <div className="absolute inset-0 bg-ink-900/10" />
              </div>

              {/* Divider */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                style={{
                  left: `${position}%`,
                }}
              >
                {/* Handle */}
                <motion.div
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink-900/90 shadow-xl backdrop-blur-md"
                  animate={{
                    scale: isDragging ? 1.12 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: easeLux,
                  }}
                >
                  <ArrowLeftRight className="h-5 w-5 text-cream-50" />
                </motion.div>
              </motion.div>

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
            </div>

            {/* Bottom detail */}
            <div className="mt-5 flex items-center justify-between px-1">
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-cream-50/30">
                Resultado personalizado
              </span>

              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-salmon-500/70">
                Laís Moraes
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}