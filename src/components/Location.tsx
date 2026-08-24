import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import { easeLux, viewportOnce } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Location() {
  const mapsUrl = siteConfig.contact.mapsUrl;

  const whatsappUrl = `https://wa.me/${
    siteConfig.contact.whatsapp
  }?text=${encodeURIComponent(
    'Olá, Mel! Gostaria de agendar um horário.'
  )}`;

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-cream-100 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-salmon-500/[0.035] blur-[140px]" />

        <div className="absolute -right-32 bottom-[-30%] h-[450px] w-[450px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
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
            ease: easeLux,
          }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-salmon-500" />

            <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-600">
              LOCALIZAÇÃO
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-ink-700 sm:text-5xl lg:text-6xl">
            Um espaço pensado
            <br />

            <span className="italic text-salmon-500">
              para receber você.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: easeLux,
          }}
          className="mt-12 grid overflow-hidden rounded-[2rem] border border-ink-700/10 bg-cream-50 lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Location */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border-b border-ink-700/10 p-7 transition-colors duration-500 hover:bg-cream-100 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
          >
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-salmon-500/[0.04] blur-[80px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-salmon-500/30 bg-salmon-500/[0.08]">
                  <MapPin
                    className="h-6 w-6 text-salmon-500"
                    strokeWidth={1.3}
                  />
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-700/10 transition-all duration-300 group-hover:border-salmon-500 group-hover:bg-salmon-500">
                  <Navigation className="h-4 w-4 text-ink-700/50 transition-colors duration-300 group-hover:text-ink-900" />
                </div>
              </div>

              <p className="mt-10 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-600">
                Endereço do studio
              </p>

              <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink-700 sm:text-4xl">
                {siteConfig.contact.address}
              </h3>

              <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-700/40">
                <MapPin className="h-3.5 w-3.5 text-salmon-500" />

                {siteConfig.contact.city}
              </p>

              <div className="mt-9 inline-flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink-700">
                Abrir no Google Maps

                <ArrowRight className="h-4 w-4 text-salmon-500 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          {/* Contact CTA */}
          <div className="relative overflow-hidden bg-ink-900 p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-salmon-500/[0.08] blur-[90px]" />

            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-salmon-500/30 bg-salmon-500/[0.08]">
                <MessageCircle
                  className="h-6 w-6 text-salmon-500"
                  strokeWidth={1.3}
                />
              </div>

              <p className="mt-10 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                Agendamento
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-tight text-cream-50 sm:text-4xl">
                Pronta para viver
                <br />

                <span className="italic text-salmon-500">
                  essa experiência?
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-cream-50/40">
                Entre em contato pelo WhatsApp, consulte os horários
                disponíveis e agende seu procedimento.
              </p>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.3,
                  ease: easeLux,
                }}
                className="mt-auto inline-flex w-fit items-center gap-3 rounded-full bg-salmon-500 px-6 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-ink-900"
              >
                <WhatsAppIcon className="h-4 w-4" />

                Agendar agora

                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}