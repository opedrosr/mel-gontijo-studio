import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';
import { easeLux } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function WhatsAppButton() {
  const [showLabel, setShowLabel] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.7,
          ease: easeLux,
        }}
        className="relative"
      >
        {/* Label */}
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: easeLux,
            }}
            className="absolute bottom-0 right-16 hidden items-center gap-3 whitespace-nowrap rounded-full border border-ink-700/10 bg-cream-50 px-4 py-3 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.25)] sm:flex"
          >
            <div>
              <p className="text-[0.5rem] uppercase tracking-[0.2em] text-salmon-600">
                Fale comigo
              </p>

              <p className="mt-0.5 text-xs font-medium text-ink-700">
                Agende seu horário
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowLabel(false)}
              aria-label="Fechar mensagem"
              className="flex h-6 w-6 items-center justify-center rounded-full text-ink-700/30 transition-colors hover:bg-ink-700/5 hover:text-ink-700"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}

        {/* Pulse */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-salmon-500/30 animate-ping [animation-duration:2.5s]" />

        {/* Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar horário pelo WhatsApp"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onHoverStart={() => setShowLabel(true)}
          transition={{
            duration: 0.3,
            ease: easeLux,
          }}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-salmon-500 text-ink-900 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.45)] sm:h-16 sm:w-16"
        >
          {/* Hover layer */}
          <span className="absolute inset-0 translate-y-full rounded-full bg-cream-50 transition-transform duration-500 ease-out group-hover:translate-y-0" />

          <span className="relative z-10">
            <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" />
          </span>

          <ArrowUpRight className="absolute right-2 top-2 z-10 h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60" />
        </motion.a>
      </motion.div>
    </div>
  );
}